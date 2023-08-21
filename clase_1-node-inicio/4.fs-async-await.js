const fs = require('node:fs/promises'); // al poner /promise automaticamente utiliza promesas en ves de callbacks

// IIFE - Inmediatly Invoked Function Expression

(async () => {
  console.log('Leyendo el primer archivo...')

  await fs
    .readFile('./archivo.txt', 'utf8')
    .then((text) => {
      console.log('Primer texto: ', text)
    })
    .catch((err) => {
      throw new Error(err)
    })

  console.log('Hacer cosas mientras lee el archivo...')

  console.log('leyendo el segundo archivo...')
  await fs
    .readFile('./archivo2.txt', 'utf8')
    .then((text) => {
      console.log('Segundo texto: ', text)
    })
    .catch((err) => {
      throw new Error(err)
    })
})()
