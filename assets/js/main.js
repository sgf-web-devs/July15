$(document).ready(function(){

    io.socket.get('/socket/join', function serverResponded(body, JWR) {

        // JWR ==> "JSON WebSocket Response"
        console.log(body.message);

    });


    io.socket.on('signin', function onServerSentEvent (msg) {
        $('.signins').append('<div class="col-sm-6 col-md-4"><div class="thumbnail"><img src="'+ msg.image +'" alt="" /><div class="caption"><h3>'+ msg.name +'</h3></div></div></div>')
    });

});
