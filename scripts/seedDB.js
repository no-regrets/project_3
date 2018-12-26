const mongoose = require("mongoose");
const db = require("../models");

// This file empties the DB collections and inserts faux starting data

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/noRegretsDB", { useNewUrlParser: true }
);

const userSeed = [
  {
    username: "joepathetic",
    email: "joepathetic@yahoo.com",
    password: "heydoink",
    set: "m",
    weight: 225,
    date: new Date(Date.now())
  },
  {
    username: "craycray",
    email: "ragergrrl@gmail.com",
    password: "OMGsoWasted",
    set: "f",
    weight: 105,
    date: new Date(Date.now())
  },
];

const drinkSeed = [
  {
    name: "beer",
    alcoholContent: 5
  },
  {
    name: "wine",
    alcoholContent: 5
  },
  {
    name: "shot",
    alcoholContent: 5
  },
  {
    name: "water",
    alcoholContent: 0
  },
];

const sessionSeed = [
  {
  drinkGoal: 4,
  maxBAC: 0,
  budget: 40,
  createdAt: { type: Date, default: Date.now },
  endedAt: { type: Date, default: Date.now }
  },
  {
    drinkGoal: 7,
    maxBAC: 0,
    budget: 200,
    createdAt: { type: Date, default: Date.now },
    endedAt: { type: Date, default: Date.now }
    },

]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Drink
  .remove({})
  .then(() => db.Drink.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Session
  .remove({})
  .then(() => db.Session.collection.insertMany(sessionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
