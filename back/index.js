const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// Ruta para obtener información adaptada al frontend
app.get('/api/data', (req, res) => {
    // Aquí podrías hacer llamadas a otras APIs o bases de datos
    const data = {
        message: 'Pester el perro',
        frontend: 'React App',
        user: 'John Doe'
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`BFF server running at http://localhost:${port}`);
});