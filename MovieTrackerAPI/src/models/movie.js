module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      release_date: {
        type: DataTypes.DATE,
      },
      genre: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
    });
  
    Movie.associate = (models) => {
      Movie.hasMany(models.Review, { foreignKey: 'movieId' });
      Movie.hasMany(models.Watchlist, { foreignKey: 'movieId' });
    };
  
    return Movie;
  };
  