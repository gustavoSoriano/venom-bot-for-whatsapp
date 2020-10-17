const venom   = require('venom-bot')
const config  = require('config')


venom.create().then(function start(client) {
	client.sendText(config.get('identifier'), '👋 Hello, bot is running...').then()

	client.onMessage( message => {
		console.log(message.type) //chat | video | image | ptt
		console.log(message.body)
		console.log(message.from)
		console.log(message.to)
		console.log(message.chat.contact.pushname)
		console.log(message.isGroupMsg)

		if (message.type === 'ptt') 
		{
			client.reply(message.from, `
👋 Olá, sou um bot de mensagens automatizadas, criado por Soriano.
Se possível, envie-me um texto, que irei calcular a prioridade da mensagem e
entrar em contato com meu mestre Soriano.
			`, message.id.toString()).then()
		}
		else if (message.type === 'video' || message.type === 'image') 
		{
			client.reply(message.from, `
👋 Olá, sou um bot de mensagens automatizadas, criado por Soriano.
Meu mestre não se encontra disponível, todavia, irei comunicá-lo que há novas mensagens.
Vale informar, que imagens e vídeos são consideradas de baixa prioridade.
			`, message.id.toString()).then()
		}
		else if (message.body === 'Oi' || message.body === 'Olá') 
		{
			client.reply(message.from, `
👋 Olá, sou um bot de mensagens automatizadas, criado por Soriano.
Deixe sua mensagem aqui, por favor.
			`, message.id.toString()).then()
		}
		else 
		{
			client.reply(message.from, `
👋 Olá, sou um bot de mensagens automatizadas, criado por Soriano.
Recebi sua mensagem e entrarei em contato com meu mestre.
			`, message.id.toString()).then()
		}
	})
})

