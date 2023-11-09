const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'mycontacts',
});

client.connect()
  .then(() => console.log('db conected success '))
  .catch((error) => console.warn('conected error ', error))

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
