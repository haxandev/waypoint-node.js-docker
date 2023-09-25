const express = require('express');
const insuranceController = require('../../controllers/insurance.controller');
const router = express.Router();

router
  .route('/calculate-insurance')
  .get(insuranceController.calculateInsuranceFee);

module.exports = router;