const repository = require('../repository/user.repository')
const ValidationException = require('../exception/validation.excpetion')

exports.save = async (user) => {
	if (user == null) {
		throw new ValidationException("É obrigado informar um usuário")
	}

	if (user.login == null || user.login == '') {
		throw new ValidationException("É obrigatório informar o login que vai ser utilizado para entrar no aplicativo")
	}

	if (user.senha == null || user.senha == '') {
		throw new ValidationException("É obrigatório informar uma senha")
	}

	if (user.email == null || user.email == '') {
		throw new ValidationException("É obrigatório informar o e-mail")
	}

	await repository.save(user)
}