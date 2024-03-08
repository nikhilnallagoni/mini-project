const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cors());
app.use(express.json());
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log(`name: ${name} email: ${email} password: ${password}`);
  res.send("register page fired");
});
app.listen(4000);
