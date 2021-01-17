const axios = require("axios");
const { expect } = require("chai");
const { Given } = require("@cucumber/cucumber");

Given("Register an account", async () => {
  const data = {
    name: "Sandesh",
    email: "sandesh12@test.com",
    password: "123456",
  };

  const response = await axios.post("http://localhost:5000/api/users/register", data);

  if (response.status === 201) {
    console.log("Successfully tested registration");
  }
});
