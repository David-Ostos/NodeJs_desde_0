const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt') // stat es para obtener la info de un archivo

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // tamaño en bytes
)
