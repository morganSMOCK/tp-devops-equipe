const express = require('express');
const app = express();

// PARTIE 3 : Variable non sensible (Configuration applicative) 
const APP_ENV = process.env.APP_ENV || 'development'; 

// PARTIE 3 : Secret (Sera masqué dans les logs GitHub) [cite: 25, 26]
const DB_PASSWORD = process.env.MY_DB_PASSWORD || 'NOT_SET';

app.get('/', (req, res) => {
    res.send(`L'application tourne en mode : ${APP_ENV}`);
});

// PARTIE 7 : Route pour prouver que le build change selon l'environnement [cite: 59, 64]
app.get('/api/config', (req, res) => {
    res.json({ 
        environment: APP_ENV, 
        status: 'Online',
        version: '1.0.0'
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
    console.log(`Environnement cible : ${APP_ENV}`); // Apparaîtra dans les logs [cite: 26]
});

module.exports = app; // Utile pour les tests unitaires [cite: 30]