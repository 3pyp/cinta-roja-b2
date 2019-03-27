// Ejecucion simple
// console.log(1);
// console.log(2);
// console.log(3);

// Ejecucion con callback
// console.log(1);
// setTimeout(function(){
//   console.log(2)
// }, 3000)
// console.log(3);

// Cuello de botella
console.log(1);
setTimeout(function () {
  console.log(2)
}, 2000)
for (i = 0; i < 999999999; i++){
  // console.log(3);
}
console.log(4);