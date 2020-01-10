require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
	.create({
		to: process.env.PHONE_TO,
		from: process.env.PHONE_FROM,
		body: 'Olá! O envio de mensagem com Twilio funcionou.'
	})
	.then(message => console.log(message));
