const db = require('../database/migration');
require('../index');
const request = require('supertest');

beforeAll(async () => {
  await db.runMigrations();
});

beforeEach(async () => {
  await db.cleanDB();
});
afterAll((done) => {
  db.endConnection().then(() => done());
});

describe('Tests', () => {
  it('get contact list', async () => {
    const result = await request('localhost:3001').get('/contacts');

    console.log('first test');

    expect(result.body.length).toBe(0);
  });

  it('get contact list', async () => {
    const result = await request('localhost:3001').post('/contacts').send({
      name: 'Renata',
    });

    console.log(result.body);

    expect(result.body.name).toBe('Renata');
  });
});
