const {Largometraje} = require('./Largometraje')

class Documental extends Largometraje {
  constructor(titulo, director){
    super(titulo)
    this.director = director
  }
  getDirector () {
    return this.director
  }
}

module.exports = {
  Documental
}