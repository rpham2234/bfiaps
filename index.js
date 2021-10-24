const express = require('express')
const app = express()

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const port = 3000;

app.get('/', (req, res) => {
  res.render("home")
})

app.get('/meet-the-teachers', (req, res) => {
  res.render("meet-the-teachers")
})


app.listen(3000, () => {
  console.log(`App listening on port ${port}!`)
})