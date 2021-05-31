const express = require('express');
const hbs = require('hbs');
require('dotenv').config()


const app = express();
const port = process.env.PORT;
const htmlDir = 'public'

app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials')

// Servir contenido estático
app.use( express.static( htmlDir ));

app.get('/', (req, res ) => { 

  res.render('home', { 
    nombre: 'Diego Casanova',
    titulo: 'Web server - DC'
  });

})

app.get('/generic', (req, res ) => { 

  res.render('generic', { 
    nombre: 'Diego Casanova',
    titulo: 'Web server - DC'
  });

})

app.get('/elements', (req, res ) => { 

  res.render('elements', { 
    nombre: 'Diego Casanova',
    titulo: 'Web server - DC'
  });

})

app.listen( port, () => { 

    console.log(`Example app listening at http://localhost:${port}`)

})