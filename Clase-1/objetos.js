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
  }
}

// console.log(ayudanteDeSanta.correr());


class Perro {
  constructor(raza, color, nombre, patas = 4) {
    this.raza = raza
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
}

var ayudanteDeSanta = new Perro('Galgo', 'Cafe', 'Ayudante de Santa', 4)

console.log(ayudanteDeSanta.ladrar())
