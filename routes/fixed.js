const config = require("config");
const express = require("express");
const router = express.Router();
const response = require("../services/response");
const _ = require("lodash");
const axios = require('axios')
const dotenv = require('dotenv');

dotenv.config();
const getUserPortfolio = async () => {
    try {
      var data = await  axios.get(config.get('USER_PORTFOLIO_LINK'))
      return data
    } catch (error) {
      console.error(error)
    }
  }

router.get("/check", async (req, res) => {
    var data = await getUserPortfolio();
    console.log(data);
    return response.withData(res, data.data);
});


module.exports = router;