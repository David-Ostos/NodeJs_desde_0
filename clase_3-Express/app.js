const express = require('express')
const picocolors = require('picocolors')
const movies = require('./movies.json')

const app = express()

app.disable('x-powered-by')

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => { // path-to-regexp 
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  else return res.status(404).json({ message: 'Movie not exist' })
})





app.get(/.*dev/, (req, res) => { // prueba de un regexp
  res.json({ message: 'soy regexp' })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(picocolors.blue('listening on port: http://localhost:' + PORT))
})