const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(port => resolve(port)) // se coloca 0 para que busu que busque automaticamente un puerto libre
        // findAvailablePort(desiredPort + 1).then(port => resolve(port)) --> otra forma de hacerlo, se le agrega 1 al puesrto ocupado
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
