const os = require('node:os')

console.log(`Nombre del sistema operativo es: ${os.platform()}`)
console.log(`Arquitectura del sistema operativo es: ${os.arch()}`)
console.log(`Version del sistema operativo es: ${os.release()}`)
console.log('CPUs', os.cpus())
console.log(`Memoria libre ${os.freemem() / 1024 / 1024} mb`)
console.log(`Memoria total ${os.totalmem() / 1024 / 1024} mb`)
console.log(`Uptime ${os.uptime()}`)
