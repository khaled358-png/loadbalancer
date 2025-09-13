const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from API 2");
});

app.listen(port, () => {
  console.log(`API 1 running on port ${port}`);
});

