var express = require('express');
var controller = express.Router();

// grab my model
var Taco = require('../models/Taco');

/* GET home page. */
controller.get('/', function(req, res, next) {
  Taco.find(function(err, tacos) {
    if (err) return next(err);
    res.json(tacos)
  });
})
.post('/', function(req, res, next) {
  // req.body gives us page data. req.params gives us url
  Taco.create(req.body, function(err, taco) {
    if (err) return next(err);
    res.json(taco);
  });
})
.get('/:id', function(req, res, next) {
  Taco.findById(req.params.id, function(err, taco) {
    if (err) return next(err);
    res.json(taco);
  });
})
// modern browswers accept patch the future
.patch('/:id', function(req, res, next) {
  Taco.findByIdAndUpdate(req.params.id, req.body, function(err, taco) {
    if (err) return next(err);
    res.json(taco);
  });
})
.put('/:id', function(req, res, next) {
  Taco.findByIdAndUpdate(req.params.id, req.body,  function(err, taco) {
    if (err) return next(err);
    res.json(taco);
  });
})
.delete('/:id', function(req, res, next) {
  Taco.findByIdAndRemove(req.params.id, function(err, taco) {
    if (err) return next(err);
    res.json(taco);
  });
});

// .get('/api', function(req, res, next) {
//   // get ALL of the types from my TYPES collection
//   // .find has an error and maybe types that we want.
//   Model.find(function(err, types) {
//     if (err) console.log(err);
//     res.json(types);
//   });
// });

module.exports = controller;
