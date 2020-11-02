const User = require("../model/login.model")
const db = require("../db")

exports.login = async (login, password) => {
    let con = await db.connect()
    let result = await Question.find({
        login: login,
        password: password
    })
    con.disconnect()
    return result
}

exports.newUser = async (user) => {
    let con = await db.connect()

    let user = new Question(user)
    await user.save()

    con.disconnect()
}