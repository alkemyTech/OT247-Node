const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const { generateJWT } = require('../helpers/generateJWT');

chai.use(chaiHttp);
const { expect } = chai;
const { describe, it } = mocha;
const app = require('../app');

const userAdminToken = generateJWT(1, 'test', 'test', 2);
const userToken = generateJWT(2, 'test', 'test', 1);

describe('Users', () => {
  describe('Get Users', () => {
    it('should return all users', (done) => {
      chai.request(app)
        .get('/users')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res.body.body).to.be.an('array');
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .get('/users')
        .set('Authorization', 'Bearer asdasd123')
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .get('/users')
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not is admin', (done) => {
      chai.request(app)
        .get('/users')
        .set('Authorization', `Bearer ${userAdminToken}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('Update User', () => {
    it('update user', (done) => {
      chai.request(app)
        .patch('/users/2')
        .set('Authorization', `Bearer ${userToken}`)
        .send({
          firstName: 'john test',
          lastName: 'Dao test',
          photo: 'urlImage test',
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          done();
        });
    });

    it('not made any changes', (done) => {
      chai.request(app)
        .patch('/users/2')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(400);
          done();
        });
    });

    it('You are not authorized to update a user', (done) => {
      chai.request(app)
        .patch('/users/1')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(401);
          done();
        });
    });

    it('User not exists | updateuser', (done) => {
      chai.request(app)
        .patch('/users/500')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(404);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .get('/users')
        .set('Authorization', 'Bearer asdasd123')
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .get('/users')
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(403);
          done();
        });
    });
  });

  describe('Delete User', () => {
    it('User deleted', (done) => {
      chai.request(app)
        .delete('/users/2')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          done();
        });
    });

    it('You are not authorized to delete a user', (done) => {
      chai.request(app)
        .delete('/users/1')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(401);
          done();
        });
    });

    it('User not exists', (done) => {
      chai.request(app)
        .delete('/users/500')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  it('Invalid token', (done) => {
    chai.request(app)
      .get('/users')
      .set('Authorization', 'Bearer asdasd123')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(403);
        done();
      });
  });

  it('Not provided token', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(403);
        done();
      });
  });
});
