const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use("/scrape", require("./Routes/Scrape"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index");
});

app.listen(port, () => console.log(`Server at ${port}`));

module.exports = app;
