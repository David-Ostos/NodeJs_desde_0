import { readFile } from 'node:fs/promises' // al poner /promise automaticamente utiliza promesas en ves de callbacks

console.log('Leyendo el primer archivo...')

const txt = await readFile('./archivo.txt', 'utf8')
  .then((text) => {
    console.log('Primer texto: ', text)
  })
  .catch((err) => {
    throw new Error(err)
  })

console.log('Hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo...')
const txt2 = await readFile('./archivo2.txt', 'utf8')
  .then((text) => {
    console.log('Segundo texto: ', text)
  })
  .catch((err) => {
    throw new Error(err)
  })
