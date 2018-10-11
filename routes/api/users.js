const router = require("express").Router();
const usersController = require("../../controller/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/fighter")
  .get(usersController.findByType)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route("/referee")
  .get(usersController.findByType)
  .put(usersController.update)
  .delete(usersController.remove);
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;