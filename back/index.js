const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para permitir CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite solicitudes de cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Encabezados permitidos
    next();
});

// Ruta para obtener información adaptada al frontend
app.get('/api/data', (req, res) => {
    const data = {
        message: 'Pester el perro',
        frontend: 'React App',
        user: 'John Doe'
    };
    res.json(data); // Devuelve la respuesta como JSON
});

// Servir los archivos estáticos del frontend (React)
// Asegúrate de haber ejecutado 'npm run build' en tu carpeta frontend
app.use(express.static(path.join(__dirname, 'mascotas/dist')));

// Ruta para manejar cualquier otra solicitud y enviar el archivo index.html de React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'mascotas/dist', 'index.html'));
});

// Inicia el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Backend funcionando en http://localhost:${port}`);
});
