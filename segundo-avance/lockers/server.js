const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const loginRoutes = require('./routes/login');
const dbConnection = require('./data/connection');

const app = express();

app.set('port', process.env.PORT || 8081);

// Establecer conexión a la base de datos
const dbOption = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'lockers'
};

// Middleware para la conexión a la base de datos
app.use(myconn(mysql, dbOption, 'single'));

// Middleware para el análisis de JSON
app.use(express.json());

// Usar las rutas de autenticación
app.use('/login', loginRoutes);

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});
