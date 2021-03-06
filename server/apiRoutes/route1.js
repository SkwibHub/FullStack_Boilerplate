const router = require('express').Router();

// matches GET requests to /api/route1/
router.get('/', function(req, res, next) {
  /* etc */
});
// matches POST requests to /api/route1/
router.post('/', function(req, res, next) {
  /* etc */
});
// matches PUT requests to /api/route1/:route1_Id
router.put('/:route1_Id', function(req, res, next) {
  /* etc */
});
// matches DELETE requests to /api/route1/:route1_Id
router.delete('/:route1_Id', function(req, res, next) {
  /* etc */
});

module.exports = router;
