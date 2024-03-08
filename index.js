const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const connectDB = require("./dbConnection/dbConnection");
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cors());
connectDB();
app.use(express.json());
// app.post("/register", (req, res) => {
//   // const { name, email, password } = req.body;
//   // console.log(`name: ${name} email: ${email} password: ${password}`);
//   // res.send("register page fired");
// });
// app.use('/register',)
app.listen(4000);
app.use(router);
