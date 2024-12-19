module.exports = (sequelize, DataTypes) => {
    const Watchlist = sequelize.define('Watchlist', {
      status: {
        type: DataTypes.STRING,
        allowNull: false, // 'to_watch', 'watching', 'watched'
      },
    });
  
    Watchlist.associate = (models) => {
      Watchlist.belongsTo(models.User, { foreignKey: 'userId' });
      Watchlist.belongsTo(models.Movie, { foreignKey: 'movieId' });
    };
  
    return Watchlist;
  };
  