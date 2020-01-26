const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

// gets all users
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

// post a new user
router.post("/add", async (req, res) => {
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// get a single user

router.get("/:userID", async (req, res) => {
  try {
    const User = await Users.findById(req.params.userID);
    res.json(User);
  } catch (err) {
    res.send({ message: err });
  }
});

// delete a user

router.delete("/:postID", async (req, res) => {
  try {
    const removedUser = await Users.deleteOne({ _id: req.params.postID });
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:postID", async (req, res) => {
  try {
    const updateUser = await Users.updateOne(
      { _id: req.params.postID },
      { $set: { name: req.params.name } }
    );
    res.json(updateUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
