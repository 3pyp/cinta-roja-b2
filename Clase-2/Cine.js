const { Pelicula } = require('./Pelicula')
const { Documental } = require('./Documental')

class Cine {
  constructor(sala){
    this.sala = sala
  }
  reproducir (Largometraje) {
    console.log(`En la sala ${this.sala} Se esta reproduciendo ${Largometraje.getTitulo()}`)
  }
}

const Cars = new Pelicula('Cars', '45min', 'Infantil')

const colombiaMagiaSalvaje = new Documental('Colombia Magia Salvaje', 'Un Colombiano')

const sala5 = new Cine(5)
const sala6 = new Cine(6)

sala5.reproducir(colombiaMagiaSalvaje)
sala6.reproducir(Cars)

