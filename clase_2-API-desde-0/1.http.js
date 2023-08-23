const http = require('node:http')
const pc = require('picocolors')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

/**
 * request es lo dastos que manda el cliente
 * response los datos que manda el server
 * */

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  
  } else if(req.url === '/imagen'){
    fs.readFile('./statusCode.png', (err, data) =>{
      if(err){
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      }else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })

  } else if (req.url === '/contacto'){
    res.end('<h1>Contacto</h1> ')
  
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>Not Found 404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
