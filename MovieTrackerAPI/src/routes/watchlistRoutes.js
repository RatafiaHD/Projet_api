const express = require('express');
const {
  getUserWatchlist,
  addToWatchlist,
  updateWatchlistStatus,
  removeFromWatchlist,
} = require('../controllers/watchlistController');
const router = express.Router();

// Routes pour la watchlist
router.get('/', getUserWatchlist);
router.post('/', addToWatchlist);
router.put('/:id', updateWatchlistStatus);
router.delete('/:id', removeFromWatchlist);

module.exports = router;