const express = require('express')
const app = express()

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const port = 3000;

app.get('/', (req, res) => {
  res.render("home")
})

app.get('/signup', (req, res) => {
  res.render("signup")
})

app.listen(3000, () => {
  console.log(`App listening on port ${port}!`)
})