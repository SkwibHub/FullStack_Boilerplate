'use strict';

const { db } = require('./database.js');
const User = require('./User.js');

/*
User.belongsTo(Group);
Group.hasMany(User);
console.log('Set associations');
*/

module.exports = {
  // Include your models in this exports object as well!
  db,
  User
};
