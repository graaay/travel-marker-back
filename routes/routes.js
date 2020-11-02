const loginRoutes = require("./login.routes")
const localizationRoutes = require("./lozalization.routes")

module.exports = (app) => {

	loginRoutes(app)
	localizationRoutes(app)

}