const express = require("express");
const users = require("./userData.json");
const fs = require("fs");
const { log, timeStamp } = require("console");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = 3000;

//Conection
mongoose
  .connect("mongodb://127.0.0.1:27017/gulshandb")
  .then(() => log("Mongoconected !"))
  .catch((err) => log("mongo Error ", err));

// Schema
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    job_title: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);
// Model
const user = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.username = "Gulshan kumar";
  res.setHeader("x-your-last-name", "kumar");

  log("i am midlware 1 and  i made the username in request ");
  next();
});

app.use((req, res, next) => {
  log("I am middleware 2");
  log("I got the user name " + res.username);
  log(req.headers);

  next();
});

app.get("/users", async (req, res) => {
  const users = await user.find({});
  const html = `<ul>${users
    .map((user) =>
      !user.user ? `<li>${user?.firstName} : ${user.email}</li>` : ""
    )
    .join("")}</ul>`;

  res.send(html);
});

app
  .route("/api/users")
  .get(async (req, res) => res.json(await user.find({})))
  .post(async (req, res) => {
    const body = req.body;

    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.ip_address ||
      !body.job_title
    ) {
      res.status(400).send({ msg: "All field are required ! " });
    }

    const result = await user.create({
      firstName: body.first_name,
      last_name: body.last_name,
      email: body.email,
      job_title: body.job_title,
      gender: body.gender,
    });

    return res.status(201).json({ msg: "created successfully", ...result });
  });

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const id = req.params.id;

    const IDuser = await user.findById(id);

    return res.json(IDuser);
  })
  .patch(async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const updated = await user.findByIdAndUpdate(id, { ...body });

    res.send({ msg: "Success" });
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    await user.findByIdAndDelete(id);

    return res.json({ status: "Successfully Deleted" });
  });

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
