const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//@desc register user
//@route post/register
//access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   console.log(name, email, password);
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("all feilds are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("user already registered!");
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: name,
      email,
      password: hashedPassword,
    });
    console.log(user);
    if (user) {
      console.log("user successfull added to db");
      res.status(200).json(user);
    } else {
      res.status(400);
      throw new Error("user details are not valid");
    }
  }
});
module.exports = { registerUser };
