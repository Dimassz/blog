const express = require('express')
const app = express();
const session = require('express-session');
const bcrypt = require('bcryptjs');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public/"));
app.use('/dist', express.static(__dirname + '/dist'));
app.use(express.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(
    session({
      secret: 'my_secret_key',
      resave: false,
      saveUninitialized: false,
    })
  );


  app.get('/', (req,res)=>{
    res.render('home')
  })

  app.listen(port, ()=>console.log(`connection to port ${port}`));