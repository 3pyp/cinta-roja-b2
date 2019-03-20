// var ayudanteDeSanta = {
//   raza: 'Galgo',
//   color: 'Cafe',
//   peso: 'Pluma',
//   patas: '4',
//   ladrar: function () {
//     console.log('waw, waw')
//   },
//   correr: function () {
//     console.log('run run')
//   },
//   comer: function () {
//     console.log('ñam ñam')
//   }
// }

// console.log(ayudanteDeSanta.correr());


class Perro{
  constructor(raza, color, nombre, ...otros){
    this.raza = raza
    this.color = color
    this.nombre = nombre
    this.otros = otros
  }
  ladrar(){
    console.log('waw, waw');
  }
  correr(){
    console.log('corro, corro');
  }
}

var ayudanteDeSanta = new Perro('Galgo', 'Cafe', 'Ayudante de Santa')

console.log(ayudanteDeSanta)
