const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

//

router.get("/employee", function(req, res) {
  Employee.find().then(function(Employee) {
    res.send({ Employee });
  });
// Employee.geoNear(
//     {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
//     {maxDistance: 100000, spherical: true}
// ).then(function(Employee){
//     res.send(Employee);
// }).catch(next);
});
router.get("/employee/:id", function(req, res, next) {
  Employee.findOne({ _id: req.params.id }).then(function(Employee) {
    res.send({
      Employee
    });
  });
});

router.post("/employee", function(req, res, next) {
  Employee.create(req.body).then(function(Employee) {
    res.send({ Employee });
  });
});
router.put("/employee/:id", function(req, res, next) {
  Employee.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Employee.findOne({ _id: req.params.id }).then(function(Employee) {
      res.send({
        Employee
      });
    });
  });
});
router.delete("/employee/:id", function(req, res, next) {
  console.log("params", req.params.id);
  Employee.findByIdAndRemove({ _id: req.params.id }).then(function(Employee) {
    res.send({
      Employee
    });
  });
});

module.exports = router;
