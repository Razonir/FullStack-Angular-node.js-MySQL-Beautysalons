const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const userfname = req.body.userfname;
  const useremail = req.body.useremail;
  const userpassword = req.body.userpassword;

  try {
    const hashedPassword = await bcrypt.hash(userpassword, 12);

    const userDetails = {
      userfname: userfname,
      useremail: useremail,
      userpassword: hashedPassword,
    };

    const result = await User.save(userDetails);

    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
