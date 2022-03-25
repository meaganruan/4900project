const express = require("express");
//express server = app
const app = express();
const port = 8000;

//route handlers - listen for requests
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//once all route handlers are set up, starts up http server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
