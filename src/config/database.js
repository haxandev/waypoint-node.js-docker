const { Client } = require("pg");
require('dotenv').config()

const getClient = async () => {
    const client = new Client({
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE
    });
    await client.connect();
    return client;
  };

module.exports = {
  getClient
};