const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const { generateJWT } = require('../helpers/generateJWT');
const { User } = require('../models');

chai.use(chaiHttp);
const { expect } = chai;
const {
  describe,
  it,
  before,
  after,
} = mocha;
const app = require('../app');

const userToken = generateJWT(1, 'test', 'test', 2);
const userAdminToken = generateJWT(2, 'test', 'test', 1);

describe('Users', () => {
  const userTest = {
    firstName: 'userTest',
    email: 'testtest@gmail.com',
    lastName: 'test',
    password: 'test.S9zstzq',
    roleId: 2,
  };

  let id;
  let userTokenTest;
  before(async () => {
    const user = await User.create(userTest);
    id = user.dataValues.id;
    userTokenTest = generateJWT(id, 'userTest', 'test', 2);
  });

  after(async () => {
    await User.destroy({ where: { id }, force: true });
  });

  describe('Get Users', () => {
    it('should return all users', (done) => {
      chai.request(app)
        .get('/users')
        .set('Authorization', `Bearer ${userAdminToken}`)
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
        .set('Authorization', `Bearer ${userToken}`)
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
        .patch(`/users/${id}`)
        .set('Authorization', `Bearer ${userTokenTest}`)
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
        .patch(`/users/${id}`)
        .set('Authorization', `Bearer ${userTokenTest}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(400);
          done();
        });
    });

    it('You are not authorized to update a user', (done) => {
      chai.request(app)
        .patch('/users/1')
        .set('Authorization', `Bearer ${userTokenTest}`)
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
        .delete(`/users/${id}`)
        .set('Authorization', `Bearer ${userTokenTest}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          done();
        });
    });

    it('You are not authorized to delete a user', (done) => {
      chai.request(app)
        .delete('/users/1')
        .set('Authorization', `Bearer ${userTokenTest}`)
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
