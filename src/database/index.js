const { Client } = require('pg');

const client = new Client({
  host: 'db',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect()
  .then(() => console.log('db conected success '))
  .catch((error) => console.warn('conected error ', error))

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
