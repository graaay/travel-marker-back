const service = require('../service/user.service')

module.exports = (app) => {

	app.post('/novoUsuario', async (req, res) => {
		await service.save(req.body)
		res.end()
	})

}