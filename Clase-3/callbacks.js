// 1.- Muestra un mensaje en consola mediante un callback 

const obtenerPersonas = function () {
  let personas = [
    'Felipe',
    'Daniel',
    'Carlos'
  ]
  console.log( personas)
}

function mostrarPersona (callback) {
  callback()

}

mostrarPersonas(obtenerPersonas)