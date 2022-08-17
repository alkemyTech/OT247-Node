const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { generateJWT } = require('../helpers/generateJWT');

chai.use(chaiHttp);

const { describe, it } = mocha;
const { expect } = chai;
const adminToken = generateJWT(1, 'exampleAdmin', 'testAdmin', 2);
const userToken = generateJWT(1, 'example', 'test', 1);

describe('Contacts', () => {
  describe('Get Contacts', () => {
    it('Get all contacts as admin', (done) => {
      chai.request(app)
        .get('/contacts')
        .set('Authorization', `Bearer ${adminToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .get('/contacts')
        .set('Authorization', 'Bearer 1234')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .get('/contacts')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .get('/contacts')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('Create Contact', () => {
    it('Should create a contact', (done) => {
      chai.request(app)
        .post('/contacts')
        .set('Authorization', `Bearer ${userToken}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({
          name: 'name test',
          email: 'test@example.com',
          message: 'hi this is a test message',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .post('/contacts')
        .set('Authorization', 'Bearer 12345')
        .send({
          name: 'name test',
          email: 'test@example.com',
          message: 'hi this is a test message',
        })
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .post('/contacts')
        .send({
          name: 'name test',
          email: 'test@example.com',
          message: 'hi this is a test message',
        })
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });
  });
});
