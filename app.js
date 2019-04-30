const express = require("express");
const app = express();
var fs = require("fs");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res, next) => {
  fs.readFile("test-result.json", function(err, data) {
    var jsonData = data;
    var jsonParsed = JSON.parse(jsonData);

    let infos = {
      name: jsonParsed.result.trips[0].name
    };
    res.render("test", infos);
  });
});

app.listen(3000, () => {
  console.log("app listening on port 3000!");
});
