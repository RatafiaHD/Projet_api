module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user', // 'admin' ou 'user'
      },
    });
  
    User.associate = (models) => {
      User.hasMany(models.Review, { foreignKey: 'userId' });
      User.hasMany(models.Watchlist, { foreignKey: 'userId' });
    };
  
    return User;
  };
  