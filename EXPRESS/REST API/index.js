const express = require("express");
const users = require("./userData.json");
const fs = require("fs");
const { log } = require("console");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.username = "Gulshan kumar"; 
  res.setHeader("x-your-last-name" , "kumar"); 

  log("i am midlware 1 and  i made the username in request ");
  next();
});

app.use((req,res,next)=>{
  log("I am middleware 2"); 
  log("I got the user name " + res.username); 
  log(req.headers); 

  next();  
})

app.get("/users", (req, res) => {
  const html = `<ul>${users
    .map((user) => (!user.user ? `<li>${user?.first_name}</li>` : ""))
    .join("")}</ul>`;

  res.send(html);
});

app
  .route("/api/users")
  .get((req, res) => res.json(users))
  .post((req, res) => {
    const body = req.body;
    users.push({ id: users.length + 1, ...body });
    fs.writeFile("./userData.json", JSON.stringify(users), (err, data) => {
      return res.json({
        status: "success",
        id: users.length,
        user: body.first_name,
      });
    });
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.send(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const user = users[id - 1];

    users[id - 1] = { ...user, ...body };

    fs.writeFile("./userData.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "Successfully added", ...users[id - 1] });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);

    users[id - 1] = { id: id, user: "Deleted" };
    fs.writeFile("./userData.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "Successfully Deleted", ...users[id - 1] });
    });
  });

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
