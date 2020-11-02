const User = require("../model/login.model")
const db = require("../db")

exports.login = async (login, password) => {
    let con = await db.connect()
    let result = await User.find({
        login: login,
        password: password
    })
    con.disconnect()
    return result
}

exports.save = async (user) => {
    let con = await db.connect()

    let usuario = new User(user)
    await usuario.save()

    con.disconnect()
}