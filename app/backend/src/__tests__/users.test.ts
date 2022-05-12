import sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import { before, after } from 'mocha';
import app from '../app';
import UsersMock from './mocks/users';

const { Users } = require('../database/models');

chai.use(chaiHttp);

const { expect } = chai;

// BEFORE RUNNING THE TESTS EXECUTE: `npm run db:reset`
// BEFORE RUNNING THE TESTS EXECUTE: `npm run db:reset`
// BEFORE RUNNING THE TESTS EXECUTE: `npm run db:reset`

describe('Testing /users', () => {
  describe('Testing POST / route', () => {
    it('Failed Request: without name', async () => {
      const response = await chai.request(app).post('/users').send({ name: '', email: 'ciclano@email.com', password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Name is required' });
    });

    it('Failed Request: without email', async () => {
      const response = await chai.request(app).post('/users').send({ name: 'ciclano', email: '', password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Email is required' });
    });

    it('Failed Request: without password', async () => {
      const response = await chai.request(app).post('/users').send({ name: 'ciclano', email: 'ciclano@email.com', password: '' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Password is required' });
    });

    it('Failed Request: wrong name type', async () => {
      const response = await chai.request(app).post('/users').send({ name: 123, email: 'ciclano@email.com', password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Name must be a string' });
    });

    it('Failed Request: wrong email type', async () => {
      const response = await chai.request(app).post('/users').send({ name: 'ciclano', email: 123, password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Email must be a string' });
    });

    it('Failed Request: wrong password type', async () => {
      const response = await chai.request(app).post('/users').send({ name: 'ciclano', email: 'ciclano@email.com', password: 123 });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Password must be a string' });
    });

    it('Failed Request: wrong email format', async () => {
      const response = await chai.request(app).post('/users').send({ name: 'ciclano', email: 'email.com', password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Invalid email' });
    });

    it('Successful request', async () => {
      const response = await chai.request(app).post('/users').send({ name: 'ciclano', email: 'ciclano@email.com', password: 'example_password' });

      expect(response.status).to.be.equal(201);
      expect(response.text).to.be.equal('created');
    });

    it('Failed Request: registered email', async () => {
      const response = await chai.request(app).post('/users').send({ name: 'ciclano', email: 'ciclano@email.com', password: 'example_password' });

      expect(response.status).to.be.equal(409);
      expect(response.body).to.be.deep.equal({ error: 'Email already registered' });
    });
  });

  describe('Testing GET / route', () => {
    before(async () => {
      sinon
        .stub(Users, 'findAll')
        .returns(UsersMock);
    });

    after(() => {
      (Users.findAll).restore();
    });

    it('Successful request', async () => {
      const response = await chai.request(app).get('/users');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal([
        {
          id: 1,
          name: 'fulano',
          email: 'fulano@email.com',
          password: 'example_password',
        },
        {
          id: 2,
          name: 'beltrano',
          email: 'beltrano@email.com',
          password: 'example_password',
        },
      ]);
    });
  });

  describe('Testing GET /:id route', () => {
    before(async () => {
      sinon
        .stub(Users, 'findByPk')
        .withArgs('1')
        .returns(UsersMock[0]);
    });

    after(() => {
      (Users.findByPk).restore();
    });

    it('Successful request', async () => {
      const response = await chai.request(app).get('/users/1');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({
        id: 1,
        name: 'fulano',
        email: 'fulano@email.com',
        password: 'example_password',
      });
    });

    it('Failed request: user not found', async () => {
      const response = await chai.request(app).get('/users/1234');
      expect(response.body).to.be.deep.equal({ error: 'User not found' });
    });
  });

  describe('Testing PUT /:id route', () => {
    it('Failed Request: without name', async () => {
      const response = await chai.request(app).put('/users/21').send({ name: '', email: 'ciclano@email.com', password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Name is required' });
    });

    it('Failed Request: without email', async () => {
      const response = await chai.request(app).put('/users/21').send({ name: 'ciclano', email: '', password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Email is required' });
    });

    it('Failed Request: without password', async () => {
      const response = await chai.request(app).put('/users/21').send({ name: 'ciclano', email: 'ciclano@email.com', password: '' });

      expect(response.body).to.be.deep.equal({ error: 'Password is required' });
      expect(response.status).to.be.equal(400);
    });

    it('Failed Request: wrong name type', async () => {
      const response = await chai.request(app).put('/users/21').send({ name: 123, email: 'ciclano@email.com', password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Name must be a string' });
    });

    it('Failed Request: wrong email type', async () => {
      const response = await chai.request(app).put('/users/21').send({ name: 'ciclano', email: 123, password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Email must be a string' });
    });

    it('Failed Request: wrong password type', async () => {
      const response = await chai.request(app).put('/users/21').send({ name: 'ciclano', email: 'ciclano@email.com', password: 123 });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Password must be a string' });
    });

    it('Failed Request: wrong email format', async () => {
      const response = await chai.request(app).put('/users/21').send({ name: 'ciclano', email: 'email.com', password: 'example_password' });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ error: 'Invalid email' });
    });

    it('Failed Request: email already registered', async () => {
      const response = await chai.request(app).put('/users/21').send({ name: 'ciclano', email: 'fox@email.com', password: 'example_password' });

      expect(response.status).to.be.equal(409);
      expect(response.body).to.be.deep.equal({ error: 'Email already registered' });
    });

    it('Successful request', async () => {
      const response = await chai.request(app).put('/users/21').send({ name: 'ciclano', email: 'ciclano@email.com', password: 'example_password' });

      expect(response.status).to.be.equal(200);
      expect(response.text).to.be.equal('updated');
    });
  });

  describe('Testing DELETE /:id route', () => {
    it('Successful request', async () => {
      const response = await chai.request(app).delete('/users/21');

      expect(response.status).to.be.equal(200);
      expect(response.text).to.be.equal('removed');
    });

    it('Failed request: user not found', async () => {
      const response = await chai.request(app).delete('/users/1234');
      expect(response.body).to.be.deep.equal({ error: 'User not found' });
    });
  });
});
