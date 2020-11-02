const mongoose = require('mongoose')

const cadastroSchema = mongoose.Schema({
	login: String,
	senha: String,
	email: String
})

module.exports = mongoose.model('User', cadastroSchema)