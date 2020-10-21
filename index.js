const express = require("express");
const path = require("path");
const app = express();
console.log(path.resolve("./public/"));
app.use("/", express.static(path.resolve("./public/")));
app.get("*", (req, res) => res.redirect("/"));
app.listen(9000, () => [console.log("server running on port 9000")]);