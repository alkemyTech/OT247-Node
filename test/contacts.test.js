const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { Contact } = require('../models');
const { generateJWT } = require('../helpers/generateJWT');

chai.use(chaiHttp);

const { describe, it, after } = mocha;
const { expect } = chai;
const adminToken = generateJWT(1, 'exampleAdmin', 'testAdmin', 1);
const userToken = generateJWT(1, 'example', 'test', 2);

const contactExample = {
  name: 'name test',
  email: 'test@example.com',
  message: 'hi this is a test message',
};

describe('/Contacts', () => {
  describe('GET /contacts', () => {
    it('Should get all contacts', (done) => {
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

  describe('POST /contacts', () => {
    after(async () => {
      await Contact.destroy({ where: { email: contactExample.email }, force: true });
    });

    it('Should create a contact', (done) => {
      chai.request(app)
        .post('/contacts')
        .set('Authorization', `Bearer ${userToken}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(contactExample)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .post('/contacts')
        .set('Authorization', 'Bearer 12345')
        .send(contactExample)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .post('/contacts')
        .send(contactExample)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });
  });
});
