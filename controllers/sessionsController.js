const db = require("../models");

// Defining methods for the sessionsController
module.exports = {
  findAll: function(req, res) {
    db.Session
      .find(req.query).populate("drink")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Session
      .findById(req.params.id).populate("drink")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Session
      .create(req.body)
      .then(dbModel => {
        // console.log(req.body.userid)
        console.log(dbModel)
        db.User.find({}).then(res => (console.log(res)));
        // db.User.updateOne({_id: req.body.userid}, {username: "Baraka"}).then(res => (console.log(res)))
        db.User.updateOne({_id: req.body.userid}, { $push: { session: dbModel._id } }, { new: true }).then(res => (console.log(res)))
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Session
      .findOneAndUpdate({ _id: req.params.id }, req.body).populate("drink")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Session
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
