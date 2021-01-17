const axios = require("axios");
const { expect } = require("chai");
const { Given } = require("@cucumber/cucumber");

Given("Get products", async () => {
  const response = await axios.get("http://localhost:5000/api/products");
  if (response.status === 200) {
    console.log("Products retrieved successfully");
  }
});
