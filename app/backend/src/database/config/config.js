require('dotenv').config({ path: '../../.env' });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'meuguru_challenge',
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'meuguru_challenge',
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'meuguru_challenge',
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};
