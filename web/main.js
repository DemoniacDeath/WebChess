$(function() {
  var socket = io('http://'+document.domain+':13666');
  socket.emit('ping', { hello: 'world'});
  // Whenever the server emits 'login', log the login message
  socket.on('pong', function (data) {
    console.log(data);
  });
});
