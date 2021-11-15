
const { Client } = require('pg');

async function getConection() {

  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'roberth',
    password: '1104017400',
    database: 'Yard_sale'
  });
  await client.connect();
  return client;
}

module.exports = getConection;
