const Sequelize = require('sequelize');
const Model = require('../models/motorcycle');
const sequelize = require('../sequelize/sequelize');

const motorcycle = (obj, args, context, info) =>
  Model(sequelize, Sequelize).findAll();

module.exports = motorcycle;
