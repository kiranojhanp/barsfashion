const request = require("supertest");
const express = require("express");
require("dotenv").config();

const productRoutes = require("../backend/routes/productRoutes");

require("./setup");

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

describe("Test of product routes", () => {
 
  test("Get all product data", () => {
    return request(app)
      .get("/api/products")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      })
      .catch();
  });

  // test("Get a particular advert data", () => {
  //   return request(app)
  //     .get(`/advert/getAll/${advertId}`)
  //     .then((res) => {
  //       expect(res.statusCode).toBe(200);
  //       expect(res.body.title).toBe("House in pepsicola");
  //     })
  //     .catch();
  // });

  
});