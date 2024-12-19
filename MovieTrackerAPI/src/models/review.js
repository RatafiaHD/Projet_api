module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
      },
    });
  
    Review.associate = (models) => {
      Review.belongsTo(models.User, { foreignKey: 'userId' });
      Review.belongsTo(models.Movie, { foreignKey: 'movieId' });
    };
  
    return Review;
  };
  