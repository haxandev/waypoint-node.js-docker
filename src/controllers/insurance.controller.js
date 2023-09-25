const insuranceService = require('../services/insuranceService');
const waypoints = require('../utils/waypoints.json');


/**
 * Calculate Insurance Fee
 * @public
 */

 exports.calculateInsuranceFee = async (req, res, next) => {
  try {
    const insuranceFee = insuranceService.calculateInsurance(waypoints);
    res.json({
      "insuranceData":insuranceFee, 
      "message": "Succesfully retrived insurance fee."
    });
  } catch (error) {
    next(error);
  }
};



