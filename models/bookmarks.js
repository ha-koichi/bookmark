'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmarks = sequelize.define('Bookmarks', {
    name: DataTypes.STRING
  }, {});
  Bookmarks.associate = function(models) {
    // associations can be defined here
  };
  return Bookmarks;
};