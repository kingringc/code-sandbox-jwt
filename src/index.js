const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const userData = require("./users");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(cors());

app.get("/users", (req, res) => {
  res.status(200).send(userData.getStaticUserData());
});

app.get("*", (req, res) => {
  res.status(404).send({ message: `Page not found.` });
});

app.listen(PORT, () => {
  console.log(`Express is running on PORT : ${PORT}`);
});
