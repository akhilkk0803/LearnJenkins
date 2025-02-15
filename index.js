const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Jenkins seekho vro");
  res.json({ message: "Jenkins seekho vro" });
});
app.listen(8000, () => console.log("Server running on port 8000"));
