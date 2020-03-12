const superagent = require('superagent');
const fs = require('fs');


function traerMuseosDeLaAPI() {
  superagent
    .get('https://www.cultura.gob.ar/api/v2.0/museos')
    .query({ format: 'json' })
    .end(escribirMuseosEnArchivo)
}

function traerOrganismosDeLaAPI() {
    // completar
    // https://www.cultura.gob.ar/api/v2.0/organismos/
}

function escribirMuseosEnArchivo(error, respuesta) {
  if (error) {
    throw error
  }

  const cantidad = respuesta.body.count
  const museos = respuesta.body.results

  console.log(`Se encontraron ${cantidad} museos. Escribiendo en archivo...`)

  fs.writeFile('museos.txt', museos[0].nombre, avisarQueTerminamos)

  traerOrganismosDeLaAPI()
}


function avisarQueTerminamos(error) {
    if (error) {
      throw error
    }

    console.log('Todo joya, andá a leer tu archivo')
}


traerMuseosDeLaAPI()
