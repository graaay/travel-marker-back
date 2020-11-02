const mongoose = require('mongoose')

module.exports = {

    connect() {
        return mongoose.connect('mongodb://localhost:27017/db_travel_maker', 
            { useNewUrlParser: true, useUnifiedTopology: true})
    }
}