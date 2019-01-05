const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: { type: String, required: true },
  alcoholContent: { type: Number, required: true },
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;

