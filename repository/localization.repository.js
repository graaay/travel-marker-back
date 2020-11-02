const Localization = require("../model/localization.model")
const db = require("../db")

exports.findAll = async () => {
    let con = await db.connect()
    let result = await Localization.find()

    con.disconnect()
    return result
}

exports.save = async () => {
    let con = await db.connect()
    
    let newLocalization = new Localization()

    await newLocalization.save()
    con.disconnect()
}