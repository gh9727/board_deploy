'use strict';

const Sequelize = require('sequelize');
const process = require('process');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);
// if (config.use_env_variable) {
//     sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//     sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

db.Crew = require('./crew')(sequelize);
db.Profile = require('./profile')(sequelize, Sequelize);

//foreignKey: 'crewId': Profile 모델에서 참조하는 외래 키
// +
db.Crew.hasOne(db.Profile, { foreignKey: 'crewId', onDelete: 'CASCADE' });
db.Profile.belongsTo(db.Crew, { foreignKey: 'crewId', onDelete: 'CASCADE' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
