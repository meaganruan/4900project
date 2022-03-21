const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`backend is running on port ${port}`);
});
