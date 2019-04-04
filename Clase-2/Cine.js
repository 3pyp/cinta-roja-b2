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


const ironman = new Pelicula("Iron Man", "40min", "Accion")
const colombiamagiasalvaje = new Documental("CMS", "alguien")


const sala5 = new Cine(5)

sala5.reproducir(colombiamagiasalvaje)