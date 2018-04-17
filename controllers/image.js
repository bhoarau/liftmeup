var db = require("../models")

module.exports = {
    //create a new user image
    findAll: function (req,res) {
        db.Image
        .find(req.query)
        .sort({username: +1})
        .then ( function (dbImage) {
        res.json(dbImage);
        });
    },
    create: function (req, res) {
        db.Image
        .create(req.body)
        .then(function(dbImage)
    {res.json(dbImage);


    });
        
    },
    //delete a user image
    delete: function (req, res) {
        db.Image
        .remove({ _id:
        req.params.id })
        .then(function (dbImage) {
            res.json(dbImage);
        });
    },
    //update a user image
   findById: function (req, res){
       db.Image
       .findById(req, params.id)
       .then(dbImage => res.json(dbImage))
       .catch(err => res.status(422).json(err));
   },
   update: function (req, res) {
       db.Image.update({ _id: req.params.id }, {$set: req.body}, {new: true}) 
       .then(function(dbImage) {
           res.json(dbImage);
       });

   },
}

