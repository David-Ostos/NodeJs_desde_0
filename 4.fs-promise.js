/**
 * esto solo en los modulos nativos
 * que no tienen promesas nativas
 * 
 * const { promisify } = require('node:util')
 * const readFilePromise = promisify(fs.readFile)
 * 
 *  */

const fs = require("node:fs/promises"); // al poner /promise automaticamente utiliza promesas en ves de callbacks

console.log("Leyendo el primer archivo...");

fs.readFile("./archivo.txt", "utf8")
  .then((text) => {
  console.log("Primer texto: ", text);
  })
  .catch((err) => {
    throw new Error(err);
  });

console.log("Hacer cosas mientras lee el archivo...");

console.log("leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf8")
  .then(text => {
    console.log("Segundo texto: ", text);
  })
  .catch(err => {
    throw new Error(err);
  });
