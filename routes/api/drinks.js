const router = require("express").Router();
const drinksController = require("../../controllers/drinksController");

// Matches with "/api/books"
router.route("/")
  .get(drinksController.findAll)
  .post(drinksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(drinksController.findById)
  .put(drinksController.update)
  .delete(drinksController.remove);

module.exports = router;
