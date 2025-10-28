// Servidor básico con Express usando ES Modules

// Importamos Express
import express from 'express';

// Creamos una instancia de la aplicación Express
const app = express();

// Definimos el puerto en el que escuchará el servidor
const PORT = 3000;

// Ruta básica para verificar que el servidor responde
app.get('/ping', (req, res) => {
  // Respondemos con texto plano "pong"
  res.type('text/plain').send('Texto de respuesta: pong');
});

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📡 Prueba la ruta: http://localhost:${PORT}/ping`);
});