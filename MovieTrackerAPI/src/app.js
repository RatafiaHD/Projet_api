const express = require('express');
const app = express();
require('dotenv').config(); 
const authRoutes = require('./routes/authRoutes'); 
const { sequelize } = require('./models'); // Connexion à la base de données

app.use(express.json()); 

// Endpoint de test (racine de l'API)
app.get('/', (req, res) => {
  res.send('API MovieTracker est opérationnelle !');
});

// Routes
app.use('/api/auth', authRoutes);

// Test de la connexion à la base de données
sequelize.authenticate()
  .then(() => console.log('Base de données connectée !'))
  .catch((err) => console.error('Erreur de connexion à la base de données :', err));

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
const movieRoutes = require('./routes/movieRoutes');

// Autres routes
app.use('/api/movies', movieRoutes);
const watchlistRoutes = require('./routes/watchlistRoutes');

// Autres routes
app.use('/api/watchlist', watchlistRoutes);