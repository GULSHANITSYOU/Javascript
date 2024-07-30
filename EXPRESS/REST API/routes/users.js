const express = require("express");

const router = express.Router();



router
  .route("/")
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

router
  .route("/:id")
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
