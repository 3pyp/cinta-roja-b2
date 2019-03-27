const request = require('request')

function getPeople() {
    return new Promise((resolve, reject) => {
        const BASE_URL = "https://goodreads-devf-aaron.herokuapp.com"
        request.get(`${BASE_URL}/api/v1/authors/`, (err,response,body) => {

            !err 
                ? resolve(JSON.parse(body)) 
                : reject("Datos no encontrados")

        })
    })
}

getPeople()
    .then(response => {
       for (let i = 0; i < response.length; i++){
           if(response[i].id === 2259) 
             console.log(response[i]) 
            
       }
    })
    .catch(err => {
        console.log(`Hubo este error: ${err}`)
    })