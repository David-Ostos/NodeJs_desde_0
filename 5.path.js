const path = require('node:path')

/**
 * es importante utilizar el path para poder unir rutas
 * en cualquier sistema operativo
 */

// como saber como la separaciond e las rutas
console.log(path.sep)

// unir rutas con path.join

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// nombre de un archivo

const base = path.basename('tmp/pepe-secret-files/password.txt')
console.log(base)

const filename = path.basename('tmp/pepe-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)
