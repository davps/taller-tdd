const { Pool } = require('pg');

const connectionString = 'postgresql://postgres:@localhost:5432/a-taller'

const pool = new Pool({
    connectionString
});

module.exports = pool;
