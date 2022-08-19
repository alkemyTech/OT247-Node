const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { Organization } = require('../models');
const { generateJWT } = require('../helpers/generateJWT');

chai.use(chaiHttp);

const {
  describe, it, before, after,
} = mocha;
const { expect } = chai;
const adminToken = generateJWT(1, 'exampleAdmin', 'testAdmin', 1);
const userToken = generateJWT(1, 'example', 'test', 2);

const organizationExample = {
  name: 'name test',
  image: 'ong.jpg',
  email: 'ong@example.com',
  welcomeText: 'welcome to our ong',
};

describe('Organizations', () => {
  let id;

  before(async () => {
    const organization = await Organization.create(organizationExample);
    id = organization.dataValues.id;
  });

  after(async () => {
    await Organization.destroy({ where: { id }, force: true });
  });

  describe('GET /organizations/public/:id', () => {
    it('Should get one organization', (done) => {
      chai.request(app)
        .get(`/organizations/public/${id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .get(`/organizations/public/${id}`)
        .set('Authorization', 'Bearer 12345')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .get(`/organizations/public/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });
  });

  describe('PATCH /organizations/public/:id', () => {
    it('Should update an organization', (done) => {
      chai.request(app)
        .patch(`/organizations/public/${id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(organizationExample)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .patch(`/organizations/public/${id}`)
        .set('Authorization', 'Bearer 12345')
        .send(organizationExample)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .patch(`/organizations/public/${id}`)
        .send(organizationExample)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .patch(`/organizations/public/${id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .send(organizationExample)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });
});
