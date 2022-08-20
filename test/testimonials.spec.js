const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const app = require('../app');
const { Testimonial } = require('../models');
const { generateJWT } = require('../helpers/generateJWT');

chai.use(chaiHttp);
const { expect } = chai;
const {
  describe,
  it,
  before,
  after,
} = mocha;

const userAdminToken = generateJWT(1, 'test', 'test', 1);
const userToken = generateJWT(1, 'test', 'test', 2);

describe('Testimonials', () => {
  let id;
  const testimonialExample = {
    name: 'testimonial test',
    image: 'image.jpg',
    content: 'content',
  };

  before(async () => {
    const testimonial = await Testimonial.create(testimonialExample);
    id = testimonial.dataValues.id;
  });

  after(async () => {
    await Testimonial.destroy({ where: { id }, force: true });
  });

  describe('GET /testimonials', () => {
    it('should return All Testimonials', (done) => {
      chai.request(app)
        .get('/testimonials')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${userAdminToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should return Unauthorize User', (done) => {
      chai.request(app)
        .get('/testimonials')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .get('/testimonials')
        .set('Authorization', 'Bearer asdasd123')
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .get('/testimonials')
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(403);
          done();
        });
    });
  });


  describe('POST Testimonials', () => {
    it('should return create Testimonials', (done) => {
      chai.request(app)
        .post('/testimonials')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${userAdminToken}`)
        .send({
          name: 'test',
          image: 'test',
          content: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .post('/testimonials')
        .set('Authorization', 'Bearer 12345')
        .send({
          name: 'test',
          image: 'test',
          content: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .post('/testimonials')
        .send({
          name: 'test',
          image: 'test',
          content: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .post('/testimonials')
        .set('Authorization', `Bearer ${userToken}`)
        .send({
          name: 'test',
          image: 'test',
          content: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('PUT Testimonials', () => {
    it('should return update Testimonials', (done) => {
      chai.request(app)
        .put(`/testimonials/${id}`)
        .set('Authorization', `Bearer ${userAdminToken}`)
        .send({
          name: 'test',
          image: 'test',
          content: 'test',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .put(`/testimonials/${id}`)
        .set('Authorization', 'Bearer 12345')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .put(`/testimonials/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .put(`/testimonials/${id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('DELETE Testimonials', () => {
    it('should return delete Testimonials', (done) => {
      chai.request(app)
        .delete(`/testimonials/${id}`)
        .set('Authorization', `Bearer ${userAdminToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Invalid token', (done) => {
      chai.request(app)
        .delete(`/testimonials/${id}`)
        .set('Authorization', 'Bearer 12345')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not provided token', (done) => {
      chai.request(app)
        .delete(`/testimonials/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('Not admin', (done) => {
      chai.request(app)
        .delete(`/testimonials/${id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });
});
