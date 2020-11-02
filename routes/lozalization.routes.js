const service = require('../service/localization.service')

module.exports = (app) => {
 
    app.post('/localization', async (req, res) => {
        await service.save(req.body)
        res.end()
    })

    app.get('/localizations/byUser/:user', async (req, res) => {
        let user = req.params.user
        let localizations = await service.findByUser(user)
        res.json(localizations)
    })

}