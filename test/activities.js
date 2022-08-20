const { describe, it, after } = require('mocha');
const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const { Activities } = require('../models');
const { generateJWT } = require('../helpers/generateJWT');
const app = require('../app');

const tokenAdmin = generateJWT(1, 'example', 'test', 1);
const tokenNotAdmin = generateJWT(2, 'example', 'test', 2);

chai.use(chaiHttp);

describe('Activities tests', () => {
  let id;

  after(() => {
    Activities.destroy({
      where:{
        id,
      },
      force: true,
    });
  });

  describe('/activities', () => {
    it('POST /activities (is not admin): should show error is not admin', (done) => {
      chai.request(app)
        .post('/activities')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenNotAdmin}`)
        .send({
          name: 'Activity test',
          image: 'test.gif',
          content: 'Activity test content',
        })
        .end((err, res) => {
          if (err) done();
          expect(res).to.have.status(401);
          done();
        });
    });

    it('POST /activities: should create a new activity', (done) => {
      chai.request(app)
        .post('/activities')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send({
          name: 'Activity test',
          image: 'test.gif',
          content: 'Activity test content',
        })
        .end((err, res) => {
          if (err) done();
          expect(res).to.have.status(200);
          id = res.body.body.id;
          done();
        });
    });

    it('PUT /activities/id (is not admin): should show error is not admin', (done) => {
      chai.request(app)
        .put(`/activities/${id}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenNotAdmin}`)
        .send({
          name: 'Activity updated',
          image: 'updated.gif',
          content: 'Activity updated test content',
        })
        .end((err, res) => {
          if (err) done();
          expect(res).to.have.status(401);
          done();
        });
    });

    it('PUT /activities/id (incorrect id): should show error activity not found', (done) => {
      chai.request(app)
        .put('/activities/100')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send({
          name: 'Activity updated',
          image: 'updated.gif',
          content: 'Activity updated test content',
        })
        .end((err, res) => {
          if (err) done();
          expect(res).to.have.status(500);
          done();
        });
    });

    it('PUT /activities/id: should update an activity', (done) => {
      chai.request(app)
        .put(`/activities/${id}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send({
          name: 'Activity updated',
          image: 'updated.gif',
          content: 'Activity updated test content',
        })
        .end((err, res) => {
          if (err) done();
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
