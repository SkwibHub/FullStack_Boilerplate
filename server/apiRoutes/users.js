const router = require('express').Router();

// matches GET requests to /api/users/
router.get('/', function(req, res, next) {
  /* etc */
});
// matches POST requests to /api/users/
router.post('/', function(req, res, next) {
  /* etc */
});
// matches PUT requests to /api/users/:users_Id
router.put('/:users_Id', function(req, res, next) {
  /* etc */
});
// matches DELETE requests to /api/users/:users_Id
router.delete('/:users_Id', function(req, res, next) {
  /* etc */
});

module.exports = router;
