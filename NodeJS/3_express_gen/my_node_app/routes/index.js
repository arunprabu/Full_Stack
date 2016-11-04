var express = require('express');
var router = express.Router();

var product = require("../product");

product1 = {
  name: "iPhone",
  price: 199,
  brand: "Apple",
  version: 6,
  color: "Rose Gold",
  memory: "128 GB"
}

product2 = {
  name: "iPhone",
  price: 399,
  brand: "Apple",
  version: 7,
  color: "Rose Gold",
  memory: "256 GB"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json(product1);
});

module.exports = router;
