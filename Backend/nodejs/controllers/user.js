const { validationResult } = require('express-validator');

const User = require('../models/user');

// all users 
exports.fetchAllUsers = async (req, res, next) => {
    try {
      const [allUsers] = await User.fetchAllUsers();
      res.status(200).json(allUsers);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  // delete user
  exports.deleteuser = async (req, res, next) => {
    try {
      const [deleteuser] = await User.deleteuser();
      res.status(200).json(deleteuser);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  