const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send({ message: "Hello World" })
})

app.get('/api/v1/user/:userid', (req, res) => {
    const userid = req.params.userid
    res.status(200).send({ message: `Este es el id de tu usuario ${userid}` })
})

app.post('/api/v1/user/create', (req, res) => {
    const { email, name, password } = req.body
    res.status(200).send({message: `Este son los datos del usuario ${email} ${name} ${password}`})

})

app.listen(3000, () => [
    console.log("server on")
])