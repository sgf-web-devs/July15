/**
 * SocketController
 *
 * @description :: Server-side logic for managing sockets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    'join': function(req, res) {

        sails.sockets.join(req.socket, 'webdevs');

        return res.json({
            message: 'Welcome to SGF Web Devs'
        });

    }

};
