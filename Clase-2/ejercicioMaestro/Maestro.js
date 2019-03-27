class Maestro {
  constructor(materia, calificaciones = [1,2,3,4,5]){
    this.materia = materia
    this.calificaciones = calificaciones
  }
  calcularPromedio (){

    this.calificaciones
    let resultado = 0

    for(let i = 0; i < this.calificaciones.length; i++){
      resultado = resultado + this.calificaciones[i]
    }
   resultado = resultado/this.calificaciones.length
    return resultado
  }
}

const maestro = new Maestro('FIsica')


console.log(maestro.calcularPromedio())