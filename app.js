const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const ValidationException = require('./exception/validation.excpetion')

const app = express()

app.use(cors())
app.use(express.json())

routes(app)

app.use( (error, req, res, next) => {
    if (!error) {
        next();
    } else if( error instanceof ValidationException) {
        res.status(400);
        res.json({ 
            error: error.message
        });
    } else {
        res.status(500);
        res.json({
            error: "Não foi possivel completar a conexão. " + error.message
        });
    }
});


app.listen(8080, () => {
    console.log("Server is up!")
})
