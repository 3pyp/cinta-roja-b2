const request = require('request')
const BASE_URL = "https://goodreads-devf-aaron.herokuapp.com"

const data = {
    name: "Cristian",
    last_name: "Gutierrez",
    nacionalidad: "MX",
    biography: "cualquier cosa",
    gender: "M",
    age: 24
  }


request.post({url:`${BASE_URL}/api/v1/authors/`, form: data}, (err,response,body)=>{
    if(!err){
      console.log(response.statusCode);
      console.log(body);
    }

}  )