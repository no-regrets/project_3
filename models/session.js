const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  drinkGoal: { type: Number, required: true },
  maxBAC: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  endedAt: { type: Date, default: Date.now }
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;