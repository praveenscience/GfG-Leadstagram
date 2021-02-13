const express = require("express");
const app = express();
const port = 3100;

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
