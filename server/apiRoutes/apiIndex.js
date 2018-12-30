const express = require('express');
const app = express();
const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/route1', require('./route1')); // matches all requests to  /api/route1/
router.use('/route2', require('./route2')); // matches all requests to  /api/route2/

// API route does not exist
router.use(function(req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
