const mongoose = require('mongoose')

const localizationSchema = mongoose.Schema({
	description: String,
	lat: String,
	lon: String,
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	
})

module.exports = mongoose.model('Localization', localizationSchema)