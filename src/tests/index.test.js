const runMigrations = require('../database/migration');
require('../index');
const request = require('supertest');

beforeAll(async () => {
  await runMigrations();
});

it('get contact list', async () => {
  const result = await request('localhost:3001').get('/contacts');

  expect(result.body).toStrictEqual([
    { name: 'Renata', id: '1234' },
    { name: 'Lucas', id: '4321' },
  ]);
});
