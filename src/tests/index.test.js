const db = require('../database/migration');
require('../index');
const request = require('supertest');

beforeAll(async () => {
  await db.runMigrations();
});

afterAll((done) => {
  db.endConnection().then(
    () => done()
  );
});

it('get contact list', async () => {
  const result = await request('localhost:3001').get('/contacts');

  expect(result.body).toStrictEqual([
    { name: 'Renata', id: '1234' },
    { name: 'Lucas', id: '4321' },
  ]);
});
