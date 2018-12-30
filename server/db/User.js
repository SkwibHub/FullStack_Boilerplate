const db = require('./database');
const Sequelize = require('sequelize');

const User = db.define('user', {
  //Sample model
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = User;
