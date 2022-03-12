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


  exports.deleteuser = async (req, res, next) => {
    console.log("5");
    try {
      const [deleteuser] = await User.deleteuser(5);
      res.status(200).json(deleteuser);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
