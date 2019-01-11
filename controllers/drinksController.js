const db = require("../models");

// Defining methods for the drinksController
module.exports = {
  findAll: function(req, res) {
    db.Drink
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Drink
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Drink
      .create(req.body)
      .then(dbModel => {
        db.Session.find({}).then(res => (console.log(res)));
        db.Session.updateOne({_id: req.body.sessionid}, { $push: { drink: dbModel._id } }, { new: true }).then(res => (console.log(res)))
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Drink
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Drink
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
