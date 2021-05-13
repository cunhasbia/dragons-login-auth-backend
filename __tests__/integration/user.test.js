import request from 'supertest';
import app from '../../src/app';

describe('user', () => {
  describe('create', () => {
    it('should be able to create a new user', async () => {
      expect.assertions(2);

      const response = await request(app).post('/users').send({
        name: 'User',
        email: 'user@user.com',
        password: 'user123456',
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('email');
    });
    it('should not be able to create a new user when sending a invalid data', async () => {
      expect.assertions(1);

      const response = await request(app).post('/users').send({
        name: '',
        email: '',
        password: '',
      });

      expect(response.status).toBe(400);
    });
  });

  describe('list', () => {
    it('should list all users', async () => {
      expect.assertions(1);

      const response = await request(app).get('/users?page=1&limit=15');

      expect(response.status).toBe(200);
    });
    it('should not be able to list all users when sending invalid data as pagination', async () => {
      expect.assertions(1);

      const response = await request(app).get('/users?page=a&limit=b');

      expect(response.status).toBe(400);
    });
  });
});
