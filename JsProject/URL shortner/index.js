const express = require("express");
const { URL } = require("./models/URL");
const { connectToMongoDB } = require("./connect");
const path = require("path");

const UrlRoute = require("./routes/url");
const StaticRoute = require("./routes/staticRout");
const UserRoute = require("./routes/user");

const app = express();
const PORT = 8001;

// Connect to MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB connected!")
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("veiws", path.resolve("./views"));

// Routes
app.use("/", StaticRoute);
app.use("/url", UrlRoute);
app.use("/user", UserRoute);

// Redirect handler
app.get("/url/:shortid", async (req, res) => {
  const shortId = req.params.shortid;

  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return res.status(404).send("Short URL not found");
    }

    return res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("Error during redirection:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server started at : ${PORT}`));
