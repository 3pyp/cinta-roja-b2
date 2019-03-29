const request = require('request')

function getPeople() {
    return new Promise((resolve, reject) => {
        const BASE_URL = "https://goodreads-devf-aaron.herokuapp.com"
        request.get(`${BASE_URL}/api/v1/authors/`, (err, response, body) => {

            !err
                ? resolve(JSON.parse(body))
                : reject("Datos no encontrados")

        })
    })
}

const getPerson = (userid) => {
    return new Promise((resolve, reject) => {
        const BASE_URL = "https://goodreads-devf-aaron.herokuapp.com"
        request.get(`${BASE_URL}/api/v1/authors/${userid}/`, (err, response, body) => {
            !err
                ? resolve(JSON.parse(body))
                : reject("Persona no encontrada")
        })
    })
}

getPeople()
    .then(users => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === 2259)
                console.log(users[i])
        }
       return getPerson(2259)
    })
    .then(user => {
        console.log(user)
    })
    .catch(err => {
        console.log(`Hubo este error: ${err}`)
    })
