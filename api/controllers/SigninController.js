var gravatar = require('gravatar');
/**
 * SigninController
 *
 * @description :: Server-side logic for managing signins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    index: function(req, res) {
        return res.view('signin');
    },

    create: function(req, res) {

        Signin.create(req.allParams()).exec(function createCB(err, created){
            sails.sockets.broadcast('webdevs', 'signin', {
                image: gravatar.url(created.email, {s: '400'}),
                name: created.firstname + " " + created.lastname
            });
            return res.redirect('/');
        });

    },

    list: function(req, res) {
        var signins = Signin.find();

        signins.exec(function callBack(err,results){
            return res.json(results);
        });
    }

};
