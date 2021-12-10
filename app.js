const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

// Basic configuration
app.use(helmet());
app.use(cors()) 

// body-parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));


app.listen(3001, () => {
    console.log(`Express on port 3001`);
  });


//PostWork invetigar estas helmet cors bcrypt


 // Usuario type Cliente y Admin 
 // REgistro y login == Seguridad
 // Productos 
 // Reseñas
 // Ordenes de compras

 // Rutas Models
