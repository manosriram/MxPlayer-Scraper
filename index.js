const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use("/scrape", require("./Routes/Scrape"));

app.get("/", (req, res) => {
  return res.redirect("/scrape");
});

app.listen(port, () => console.log(`Server at ${port}`));

module.exports = app;
