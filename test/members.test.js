const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { Member } = require('../models');
const { generateJWT } = require('../helpers/generateJWT');

chai.use(chaiHttp);

const {
  describe, it, before, after,
} = mocha;
const { expect } = chai;
const adminToken = generateJWT(1, 'exampleAdmin', 'testAdmin', 1);
const userToken = generateJWT(1, 'example', 'test', 2);

const memberExample = {
  name: 'Martin Sanchez',
  facebookUrl: 'www.facebook.com/martinsanchez02',
  instagramUrl: 'www.instagram.com/martin_sanchez_2',
  linkedinUrl: 'www.linkedin.com/sanchez_martin',
  image: 'img.jpg',
  description: ' ',
};

describe('Members', () => {
  let id;

  before(async () => {
    const member = await Member.create(memberExample);
    id = member.dataValues.id;
  });

  after(async () => {
    await Member.destroy({ where: { id }, force: true });
    await Member.destroy({ where: { id: id + 1 }, force: true });
  });

  describe('POST /members', () => {
    it('Should create a member', (done) => {
      chai.request(app)
        .post(`/members`)
        .set('Authorization', `Bearer ${userToken}`)
        .send(memberExample)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Invalid token', (done) => {
      chai.request(app)
        .post(`/members`)
        .set('Authorization', `Bearer 12345`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .post(`/members`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });
  });

  describe('PUT /members/:id', () => {
    it('Should update a member', (done) => {
      chai.request(app)
        .put(`/members/${id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .send(memberExample)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Invalid token', (done) => {
      chai.request(app)
        .put(`/members/${id}`)
        .set('Authorization', `Bearer 12345`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .put(`/members/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });
  });

  describe('GET /members', () => {
    it('Should get all members', (done) => {
      chai.request(app)
        .get(`/members`)
        .set('Authorization', `Bearer ${adminToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Invalid token', (done) => {
      chai.request(app)
        .get(`/members`)
        .set('Authorization', `Bearer 12345`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .get(`/members`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not Admin', (done) => {
      chai.request(app)
        .get(`/members`)
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('DELETE /members/:id', () => {
    it('Should delete a member', (done) => {
      chai.request(app)
        .delete(`/members/${id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Invalid token', (done) => {
      chai.request(app)
        .delete(`/members/${id}`)
        .set('Authorization', `Bearer 12345`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .delete(`/members/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not Admin', (done) => {
      chai.request(app)
        .delete(`/members`)
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });

  });

});
