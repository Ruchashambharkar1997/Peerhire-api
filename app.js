const express = require("express");
const usersRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", usersRouter);

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
