const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



app.post("/students", (req, res) => {
  res.send("hello from the other site");
});
app.listen(port, () => {
  console.log(`setup at ${port}`);
});
