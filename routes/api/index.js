const router = require("express").Router();
const userRoutes = require("./users");
const drinkRoutes = require("./drinks");
const sessionRoutes = require("./sessions");

// User routes
router.use("/users", userRoutes);
// Drink routes
router.use("/drinks", drinkRoutes);
// Sessions routes
router.use("/sessions", sessionRoutes);

module.exports = router;
