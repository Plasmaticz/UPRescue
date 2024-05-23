const index = require("./index");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

test("index route works", done => {
    request(app)
      .get("/")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(500, done);
});

