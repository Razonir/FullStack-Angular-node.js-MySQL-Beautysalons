const { validationResult } = require('express-validator');

const Business = require('../models/business');

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



  