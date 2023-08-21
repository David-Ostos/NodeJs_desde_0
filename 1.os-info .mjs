import {
  platform,
  arch,
  release,
  cpus,
  freemem,
  totalmem,
  uptime
} from 'node:os'

console.log(`Nombre del sistema operativo es: ${platform()}`)
console.log(`Arquitectura del sistema operativo es: ${arch()}`)
console.log(`Version del sistema operativo es: ${release()}`)
console.log('CPUs', cpus())
console.log(`Memoria libre ${freemem() / 1024 / 1024} mb`)
console.log(`Memoria total ${totalmem() / 1024 / 1024} mb`)
console.log(`Uptime ${uptime()}`)
