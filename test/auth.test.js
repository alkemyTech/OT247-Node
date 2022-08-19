const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const app = require('../app');
const { User } = require('../models');

const { generateJWT } = require('../helpers/generateJWT');

const adminToken = generateJWT(1, 'exampleAdmin', 'testAdmin', 1);
const userToken = generateJWT(1, 'example', 'test', 2);

chai.use(chaiHttp);
const { expect } = chai;
const { describe, it, after } = mocha;

describe('Auth ', () => {
  const user = {
    firstName: 'Test',
    lastName: 'Example',
    email: 'hello556@gmail.com',
    password: 'testeo987.S9zstzq',
  };

  const userError = {
    firstName: '',
    lastName: '**',
    email: 'abc',
    password: '01',
  };

  after(async () => {
    await User.destroy({ where: { email: user.email }, force: true });
  });

  describe('POST [REGISTER-USER]', () => {
    it('Should register an user', (done) => {
      chai.request(app)
        .post('/auth/register')
        .set('Content-Type', 'application/json')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message');
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('Should not register an user with error', (done) => {
      chai.request(app)
        .post('/auth/register')
        .set('Content-Type', 'application/json')
        .send(userError)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.error).to.have.property('text');
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  describe('POST [LOGIN-USER]', () => {
    it('Should login an user', (done) => {
      chai.request(app)
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          email: user.email,
          password: user.password,
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Should not login an user with error', (done) => {
      chai.request(app)
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          email: userError.email,
          password: userError.password,
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.error).to.have.property('text');
          expect(res.type).to.be.a('string').equal('text/html');
          done();
        });
    });
  });

  describe('GET [ME-USER]', () => {
    it('GET [SUCCESS] - It should return a user data', (done) => {
      chai.request(app)
        .get('/auth/me')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res.body.code).to.be.a('number').equal(200);
          expect(res.body.status).to.be.a('boolean').equal(true);
          expect(res.body).to.be.property('message');
          expect(res.body.message).to.be.a('string').equal('Token verified');
          expect(res.body).to.be.a('object');
          done();
        });
    });
    it('GET [SUCCESS] - It should return a user admin data', (done) => {
      chai.request(app)
        .get('/auth/me')
        .set('Authorization', `Bearer ${adminToken}`)
        .end((err, res) => {
          expect(res.body.code).to.be.a('number').equal(200);
          expect(res.body.status).to.be.a('boolean').equal(true);
          expect(res.body).to.be.property('message');
          expect(res.body.message).to.be.a('string').equal('Token verified');
          expect(res.body).to.be.a('object');
          done();
        });
    });
    it('GET [SUCCESS] - It should return a user data not valided', (done) => {
      chai.request(app)
        .get('/auth/me')
        .set('Authorization', 'Bearer example')
        .end((err, res) => {
          expect(res.error.status).to.be.a('number').equal(403);
          expect(res.error.text).to.be.a('string').equal('Forbidden');
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });
});
