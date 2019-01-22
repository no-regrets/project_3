const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  drinkGoal: { type: Number, required: false, default: 3 },
  maxBAC: { type: Number, required: false, default: 3 },
  budget: {type: Number, required: false, default: 50 },
  createdAt: { type: Date, default: Date.now },
  endedAt: { type: Date, default: Date.now },
  drink: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Session model
      ref: "Drink"
    }
  ]
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;