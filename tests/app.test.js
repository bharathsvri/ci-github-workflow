const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  describe('GET /api/hello', () => {
    it('should return 200 OK with status success and message', async () => {
      const response = await request(app).get('/api/hello');

      assert.equal(response.status, 200);
      assert.equal(response.body.status, 'success');
      assert.equal(response.body.message, 'Hello, World! API is up and running.');
      assert.ok(response.body.timestamp, 'timestamp should be present');
    });

    it('should return 404 for unknown routes', async () => {
      const response = await request(app).get('/api/non-existent');

      assert.equal(response.status, 404);
    });
  });
});
