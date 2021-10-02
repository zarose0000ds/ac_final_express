const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// STATIC FILES
app.use(express.static('public'))

// TEMPLATE ENGINE
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// ROUTES
app.get('/', (req, res) => {
  res.render('index')
})

// LISTENING
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})