const request = require('request')

request.get('https://pokeapi.co/api/v2/pokemon/pikachu/', (err,response,body)=>{
    if(!err){
      console.log(response.statusCode);
      console.log(JSON.parse(body));
    }
}  )