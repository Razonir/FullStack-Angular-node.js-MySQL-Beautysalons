const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Business = require('../models/business');

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const userfname = req.body.userfname;
  const userlname = req.body.userlname;
  const useremail = req.body.useremail;
  const userpassword = req.body.userpassword;
  const usercity = req.body.usercity;
  const useraddress = req.body.useraddress;
  const userphone = req.body.userphone;


  try {
    const hashedPassword = await bcrypt.hash(userpassword, 12);

    const userDetails = {
      userfname: userfname,
      userlname: userlname,
      useremail: useremail,
      userpassword: hashedPassword,
      usercity: usercity,
      useraddress: useraddress,
      userphone: userphone
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

/*
* business
*/
exports.signupbusiness = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const bfname = req.body.bfname;
  const blname = req.body.blname;
  const bname = req.body.bname;
  const bdescription = req.body.bdescription;
  const bemail = req.body.bemail;
  const bpassword = req.body.bpassword;
  const bcity = req.body.bcity;
  const baddress = req.body.baddress;
  const bphone = req.body.bphone;
  const bsubject = req.body.bsubject;
  const blogo = req.body.blogo;


  try {
    const hashedPassword = await bcrypt.hash(bpassword, 12);

    const businessDetails = {
      bfname: bfname,
      blname: blname,
      bname: bname,
      bdescription: bdescription,
      bemail: bemail,
      bpassword: hashedPassword,
      bcity: bcity,
      baddress: baddress,
      bphone: bphone,
      bsubject: bsubject,
      blogo: blogo
    };

    const result = await Business.save(businessDetails);

    res.status(201).json({ message: 'Business registered!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

