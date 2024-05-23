const filter = require("./filter");

var bodyParser = require('body-parser');

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", filter);

test("filter route works", done => {
    request(app)
      .get("/")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(404, done);
});

test("filter route works", done => {
    request(app)
      .post("/")
      .send( {} )
      .then(() => {
        request(app)
          .get("/")
          .expect( {}, done);
      });
});

test("filter route works", done => {
  request(app)
    .post("/")
    .send( { type: 'FoodBanks' } )
    .then(() => {
      request(app)
        .get("/")
        .expect( {}, done);
    });
});

test("filter route works", done => {
  request(app)
    .post("/")
    .send( { type: 'HomelessShelters' } )
    .then(() => {
      request(app)
        .get("/")
        .expect( {}, done);
    });
});

test("filter route works", done => {
  request(app)
    .post("/")
    .send( { type: 'AddictionRehab' } )
    .then(() => {
      request(app)
        .get("/")
        .expect( {}, done);
    });
});

test("filter route works", done => {
  request(app)
    .post("/")
    .send( { type: 'AlternativeShelter' } )
    .then(() => {
      request(app)
        .get("/")
        .expect( {}, done);
    });
});

test("filter route works", done => {
  request(app)
    .post("/")
    .send( { type: 'HealthClinics' } )
    .then(() => {
      request(app)
        .get("/")
        .expect( {}, done);
    });
});

test("filter route works", done => {
  request(app)
    .post("/")
    .send( { type: 'All' })
    .then(() => {
      request(app)
        .get("/")
        .expect( {}, done);
    });
});

test("filter route works", done => {
  request(app)
    .post("/")
    .send( { type: 'random' })
    .then(() => {
      request(app)
        .get("/")
        .expect( {}, done);
    });
});




