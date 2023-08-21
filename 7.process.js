// argumentos 
console.log(process.argv)


// current working directory
console.log(process.cwd())

//variables de entorno
console.log(process.env.PEPITO)



// controlar el porceso y su salida 
process.exit()

//podemos controlar eventos del proceso
process.on('exit', () => {
    //limpiar los recuros
    console.log('cerro')
})