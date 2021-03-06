const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.port || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// app.use(express.static(__dirname + '/public'));
//
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('scremIt', (text) => {
  return text.toUpperCase();
});
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle : "Home page",
    subHead : "Welcome to home page bro"
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle : "About Page",
    subHead : "Welcome to about page bro",
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
