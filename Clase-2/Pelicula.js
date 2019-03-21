const { Largometraje } = require('./Largometraje')

class Pelicula extends Largometraje {
  constructor (titulo, duracion, genero){
    super(titulo)
    this.duracion = duracion
    this.genero = genero
  }
  getDuracion(){
    return this.duracion
  }
}

module.exports = {
  Pelicula
}