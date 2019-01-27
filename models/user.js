const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  sub: {type: String, required: true, unique: true},
  username: { type: String , required: false},
  email: { type: String, required: false},
  password: { type: String, required: false},
  sex: { type: String, default: "male" },
  weight: {type: Number, default: 200},
  date: { type: Date, default: Date.now },
  session: [
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