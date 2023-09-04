const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://chiragchawla648:chirag@123@cluster0.nbgdvjq.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");




app.use(require("./routes/index"))
app.use(require("./routes/todo"))


app.listen(3000, () => console.log("Server started listening on port: 3000"));
