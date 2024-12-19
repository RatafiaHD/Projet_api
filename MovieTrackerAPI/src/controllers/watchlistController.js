const { Watchlist, Movie } = require('../models');

exports.getUserWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.findAll({ where: { userId: req.user.id }, include: [Movie] });
    res.status(200).json(watchlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addToWatchlist = async (req, res) => {
  try {
    const { movieId, status } = req.body;
    const watchlistEntry = await Watchlist.create({ userId: req.user.id, movieId, status });
    res.status(201).json(watchlistEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateWatchlistStatus = async (req, res) => {
  try {
    const watchlistEntry = await Watchlist.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!watchlistEntry) return res.status(404).json({ message: 'Entrée non trouvée dans la watchlist' });

    const updatedEntry = await watchlistEntry.update({ status: req.body.status });
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeFromWatchlist = async (req, res) => {
  try {
    const watchlistEntry = await Watchlist.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!watchlistEntry) return res.status(404).json({ message: 'Entrée non trouvée dans la watchlist' });

    await watchlistEntry.destroy();
    res.status(200).json({ message: 'Entrée supprimée de la watchlist' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
