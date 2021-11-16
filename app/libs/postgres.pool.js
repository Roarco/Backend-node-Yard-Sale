
const { Pool } = require('pg');

  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'roberth',
    password: '1104017400',
    database: 'Yard_sale'
  });


module.exports = pool;
