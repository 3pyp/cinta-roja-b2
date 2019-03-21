var ayudanteDeSanta = {
  raza: 'Galgo',
  color: 'Cafe',
  peso: 'Pluma',
  patas: '4',
  ladrar: function () {
    return 'waw, waw'
  },
  correr: function () {
    return 'run run'
  },
  comer: function () {
    return 'ñam ñam'
  },
  saludar: function () {
    return 'askjdkasd'
  }
}

// console.log(ayudanteDeSanta)
ayudanteDeSanta.saludar = function(){
 return `Hola mi raza es ${this.raza}`
}

console.log(ayudanteDeSanta.saludar())



class Perro {
  constructor( color, nombre, patas = 4) {
    this.raza = 'laksdasd'
    this.color = color
    this.nombre = nombre
    this.patas = patas
  }
  ladrar () {
    return 'Wau Wau';
  }
  correr () {
    return 'Corro corro'
  }
  getColor () {
    return this.color
  }
}

// var ayudanteDeSanta = new Perro('Galgo', 'Cafe', 'Ayudante de Santa', 3)

// console.log(ayudanteDeSanta.getColor())

