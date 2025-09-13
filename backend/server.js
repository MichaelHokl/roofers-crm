const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Roofers CRM backend running!");
});

app.listen(port, (req, res) => {
  console.log(`The server is running on port: ${port}`);
});
