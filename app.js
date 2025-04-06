const express = require("express");
const usersRouter = require("./routes/users");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const port = process.env.PORT || 3000;

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "PeerHire API",
        version: "1.0.0",
        description: "Documentation for the PeerHire Express API",
      },
    },
    apis: ["./routes/*.js"], // Swagger will scan JSDoc comments in these files
  };
  
  const specs = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

  


app.use(express.json());
app.use("/api/users", usersRouter);
/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */



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


