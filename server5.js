const express = require('express');
const app = express();

const db = require('./db');

app.use(express.json());

app.get('/', function(req, res) {
    res.send('welcome');
});

// import the router files
const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/MenuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', MenuItemRoutes);

app.listen(3001, () => {
    console.log('listening to port 3001');
});