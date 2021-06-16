var app = require('./config/server');


var server = app.listen(3000, function(){
	console.log('Servidor iniciado');
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){

	socket.on('msgParaServidor', function(data){
		socket.emit('msgParaCliente',
		 {apelido: 'Eu', mensagem: data.mensagem});

		socket.broadcast.emit('msgParaCliente',
		 {apelido: data.apelido, mensagem: data.mensagem});

		if(parseInt(data.apelido_atualizado_clientes) == 0){
			socket.emit('participantesParaCliente',
			 {apelido: 'Eu', mensagem: data.mensagem});

			socket.broadcast.emit('participantesParaCliente',
			 {apelido: data.apelido, mensagem: data.mensagem});
		}
	});

});

