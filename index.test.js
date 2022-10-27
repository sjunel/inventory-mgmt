import request from 'supertest';
import app, { db } from './index';

describe('GET /', () => {
  test('Responds to /', async () => {
    const res = await request(app).get('/');

    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });
});

describe('Database connection', () => {
  async function testConnection() {
      const c = await db.connect(); // try to connect
      c.done(); // success, release connection
      return c.client.serverVersion; // return server version
  }

  test('Gives Postgres server version', async () => {
    const psql_ver = await testConnection();
    expect(psql_ver).toBe('14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)');
  });
});
