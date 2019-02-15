const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const mongoose = require("mongoose");
var cors = require('cors')

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/employee");

// app.use(express.static('public'));

// app.use(bodyParser.urlencoded());
app.use(cors())
app.use(bodyParser.json());

app.use("/api", routes);


app.use(function(err, req, res, next){
    // console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 5001, function() {
  console.log("now listening for requests");
});
