var pessoas = [{
	nome: "Luiz",
	idade: 20,
	cpf: 1,
}, {
	nome:"yuri",
	idade: 21,
	cpf:2,
}]

module.exports = (server) => {
	server.get("/pessoas", (request, response) => {
		response.send(pessoas)
	})

	server.get("/pessoas/:pos", (request, response) => {
		const posicao = request.params.pos
		if(posicao <= pessoas.length) { 
			response.send(pessoas[request.params.pos - 1])
		} else {
			response.send(400, {
				error: "indice nao pode ser acessado"
			})
		}
	})
}

