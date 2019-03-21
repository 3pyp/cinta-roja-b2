const { Pelicula } = require('./Pelicula')
const { Documental } = require('./Documental')

class Cine {
  constructor(sala){
    this.sala = sala
  }
  reproducir (Largometraje) {
    console.log(`Se esta reproduciendo ${Largometraje.getTitulo()}`)
  }
}

const Cars = new Pelicula('Cars', '45min', 'Infantil')
const colombiaMagiaSalvaje = new Documental('Colombia Magia Salvaje', 'Un Colombiano')
const sala5 = new Cine(5)
