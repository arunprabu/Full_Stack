var express = require('express');
var router = express.Router();

var contactSvc = require("../services/contactService");

router.get('/', function(req, res, next) {
  contactSvc.findAll(function(err, doc) {
    res.send(doc);
  });
});

router.get('/:id', function(req, res, next) {
  contactSvc.findById(req.params.id, function(err, doc) {
    res.send(doc.toObject());
  });
});
router.post('/', function(req, res, next) {
  contactSvc.create(req.body, function(err, savedContact) {
    res.send(savedContact);
  });
});

router.put('/:id', function(req, res, next) {
  res.send(`Update contacts ${req.params.id} with contact ${req.body}`);
});

router.delete('/:id', function(req, res, next) {
  res.send(`Delete contacts ${req.params.id}`);
});

module.exports = router;
