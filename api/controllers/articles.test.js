
const express = require('express');
const request = require('supertest');

const app = express();


describe('GET /articles', () => {
  it('fetches successfully data from an API', (done) => {
    app.get('/articles', function(req, res) {
      res.status(200).json();
    });

    request(app)
    .get('/articles')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
 
  it('fetches erroneously data from an API', (done) => {
    app.get('/articles', function(req, res) {
      res.status(404);
    });

    request(app)
    .get('/fail')
    .expect('Content-Type', "text/html; charset=utf-8")
    .expect(404, done);
  });
});