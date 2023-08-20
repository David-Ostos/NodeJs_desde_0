import { readFile } from "node:fs/promises"; // al poner /promise automaticamente utiliza promesas en ves de callbacks

Promise.all([
  readFile('./archivo.txt','utf8'),
  readFile('archivo2.txt', 'utf8')
]).then(([ text, secondText ]) => {
  console.log('Primer Texto: ', text)
  console.log('Second Texto: ' + secondText)
})
