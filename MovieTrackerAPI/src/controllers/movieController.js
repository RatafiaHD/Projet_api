const { Movie } = require('../models');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Film non trouvé' });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const { title, description, release_date, genre, rating } = req.body;
    const movie = await Movie.create({ title, description, release_date, genre, rating });
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Film non trouvé' });

    const updatedMovie = await movie.update(req.body);
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Film non trouvé' });

    await movie.destroy();
    res.status(200).json({ message: 'Film supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
