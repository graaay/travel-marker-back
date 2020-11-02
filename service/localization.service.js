const repository = require('../repository/localization.repository')
const ValidationException = require('../exception/validation.excpetion')
const localizationRepo = requirerequire('../repository/localization.repository')


exports.save = async (localization) => {
    if (localization == null) {
        throw new ValidationException("É obrigatório informar uma localização")
    }

    if (localization.lat == null || localization.lat == '' && localization.lon == null || localization.lon == '') {
        throw new ValidationException("É obrigatório escolher um local válido")
    }
    await repository.save(localization)
}

exports.findAll = async () => {
    return await repository.findAll()
}
