const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { News, Category } = require('../models');
const { generateJWT } = require('../helpers/generateJWT');

chai.use(chaiHttp);

const {
  describe, it, before, after,
} = mocha;
const { expect } = chai;
const adminToken = generateJWT(1, 'exampleAdmin', 'testAdmin', 1);
const userToken = generateJWT(1, 'example', 'test', 2);

const newsExample = {
  name: 'name test',
  content: 'content of a new',
  image: 'news.jpg',
  categoryId: 1,
  type: 'test',
};

describe('News', () => {
  let id;

  before(async () => {
    const category = await Category.create({
      name: 'test',
      description: 'this is a description',
      image: 'example.jpg',
    });
    newsExample.categoryId = category.dataValues.id;

    const news = await News.create(newsExample);
    id = news.dataValues.id;
  });

  after(async () => {
    await News.destroy({ where: { id }, force: true });
    await News.destroy({ where: { id: id + 1 }, force: true });
    await Category.destroy({ where: { id: newsExample.categoryId }, force: true });
  });

  describe('GET /news', () => {
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

  describe('POST /news', () => {
    it('Should create a news', (done) => {
      chai.request(app)
        .post('/news')
        .set('Authorization', `Bearer ${userToken}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(newsExample)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .post('/news')
        .set('Authorization', 'Bearer 12345')
        .send(newsExample)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .post('/news')
        .send(newsExample)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });
  });

  describe('GET /news/:id', () => {
    it('Should get one news', (done) => {
      chai.request(app)
        .get(`/news/${id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .get(`/news/${id}`)
        .set('Authorization', 'Bearer 12345')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .get(`/news/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .get(`/news/${id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('PUT /news/:id', () => {
    it('Should update a news', (done) => {
      chai.request(app)
        .put(`/news/${id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(newsExample)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .put(`/news/${id}`)
        .set('Authorization', 'Bearer 12345')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .put(`/news/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .put(`/news/${id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('DELETE /news/:id', () => {
    it('Should delete a news', (done) => {
      chai.request(app)
        .delete(`/news/${id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .delete(`/news/${id}`)
        .set('Authorization', 'Bearer 12345')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .delete(`/news/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .delete(`/news/${id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });
});
