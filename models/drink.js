const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: { type: String, required: false, default: "drink" },
  alcoholContent: { type: Number, required: false, default: 1 },
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;

