const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const drinkRoutes = require("./drinks");
const sessionRoutes = require("./sessions");

// Book routes
router.use("/books", bookRoutes);
// User routes
router.use("/users", userRoutes);
// Drink routes
router.use("/drinks", drinkRoutes);
// Sessions routes
router.use("/sessions", sessionRoutes);

module.exports = router;
