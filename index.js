const express = require('express')
const app = express()

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render("home")
})

app.get('/meet-the-teachers', (req, res) => {
  res.render("meet-the-teachers")
})

app.get('/classes', (req, res) => {
  res.render("classes")
})

app.get('/signup' , (req,res) => {
  res.render("enroll")
})

app.get('/about',(req,res) =>{
  res.render("about")
})
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})