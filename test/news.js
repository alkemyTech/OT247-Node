const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { generateJWT } = require('../helpers/generateJWT');

chai.use(chaiHttp);

const { describe, it } = mocha;
const { expect } = chai;
const adminToken = generateJWT(1, 'exampleAdmin', 'testAdmin', 1);
const userToken = generateJWT(1, 'example', 'test', 2);

describe('News', () => {
  describe('Get News', () => {
    it('Should get all news', (done) => {
      chai.request(app)
        .get('/news')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .get('/news')
        .set('Authorization', 'Bearer 1234')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .get('/news')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });
  });

  describe('Create News', () => {
    it('Should create a news', (done) => {
      chai.request(app)
        .post('/news')
        .set('Authorization', `Bearer ${adminToken}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({
          name: 'name test',
          content: 'content of a new',
          image: 'news.jpg',
          categoryId: 1,
          type: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .post('/news')
        .set('Authorization', 'Bearer 12345')
        .send({
          name: 'name test',
          content: 'content of a new',
          image: 'news.jpg',
          categoryId: 1,
          type: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .post('/news')
        .send({
          name: 'name test',
          content: 'content of a new',
          image: 'news.jpg',
          categoryId: 1,
          type: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .post('/news')
        .set('Authorization', `Bearer ${userToken}`)
        .send({
          name: 'name test',
          content: 'content of a new',
          image: 'news.jpg',
          categoryId: 1,
          type: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('Get one news', () => {
    it('Should get one news', (done) => {
      chai.request(app)
        .get('/news/1')
        .set('Authorization', `Bearer ${adminToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .get('/news/1')
        .set('Authorization', 'Bearer 12345')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .get('/news/1')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .get('/news/1')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('Update news', () => {
    it('Should update a news', (done) => {
      chai.request(app)
        .put('/news/1')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          name: 'name test',
          content: 'content of a new',
          image: 'news.jpg',
          categoryId: 1,
          type: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .put('/news/1')
        .set('Authorization', 'Bearer 12345')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .put('/news/1')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .put('/news/1')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('Delete news', () => {
    it('Should delete a news', (done) => {
      chai.request(app)
        .delete('/news/1')
        .set('Authorization', `Bearer ${adminToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .delete('/news/1')
        .set('Authorization', 'Bearer 12345')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .delete('/news/1')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .delete('/news/1')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });
});
