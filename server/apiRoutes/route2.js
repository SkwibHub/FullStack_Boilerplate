const router = require('express').Router();

// matches GET requests to /api/route2/
router.get('/', function(req, res, next) {
  /* etc */
});
// matches POST requests to /api/route2/
router.post('/', function(req, res, next) {
  /* etc */
});
// matches PUT requests to /api/route2/:route2_Id
router.put('/:route2_Id', function(req, res, next) {
  /* etc */
});
// matches DELETE requests to /api/route2/:route2_Id
router.delete('/:route2_Id', function(req, res, next) {
  /* etc */
});

module.exports = router;
