const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  sex: { type: String, required: true },
  weight: {type: Number, required: true},
  date: { type: Date, default: Date.now },
  notes: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Session model
      ref: "Session"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;