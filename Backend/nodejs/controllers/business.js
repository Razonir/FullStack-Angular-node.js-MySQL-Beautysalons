const { validationResult } = require('express-validator');

const Business = require('../models/business');

// all business data
exports.fetchAll = async (req, res, next) => {
    try {
      const [allBusiness] = await Business.fetchAll();
      res.status(200).json(allBusiness);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };


  exports.visiblet = async (req, res, next) => {
    console.log("5");
    try {
      const [visiblet] = await User.visiblet(5);
      res.status(200).json(visiblet);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  