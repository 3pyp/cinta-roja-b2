const users = [
  {id: 1,nombre: 'Cristian'},
  {id: 2,nombre: 'Carlos'},
  {id: 3,nombre: 'Daniel'},
  {id: 4,nombre: 'Nicolas'}
]

const getUsers = function (callback){
  
  setTimeout(function(){
    callback(true, users)
  }, 2000)

}
getUsers(function(err, users){
  if(err){
    console.log(err)
  } else {
    console.log(users)
  }
})