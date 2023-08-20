const fs = require("node:fs");

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf8", (err, text) => {
  try {
    console.log(text);
  } catch {
    throw new Error(err);
  }
}); // hay que especificar como queremos que nos lo codifique como segundo parametro

console.log("Hacer cosas mientras lee el archivo...");

console.log("leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf8", (err, text) => {
  try {
    console.log(text);
  } catch {
    throw new Error(err);
  }
});
