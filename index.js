const restify = require('restify')

const server = restify.createServer()

const homeRota = require('./rotas/homeRota')

const pessoasRotas = require('./rotas/pessoasRotas')

server.use(restify.plugins.queryParser())

homeRota(server)
pessoasRotas(server)

const msgServidorOn = () => {
	console.log('servidor rodando...')
}

server.listen(3000, msgServidorOn)


