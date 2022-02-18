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

exports.getUserDetails = async(req,res,next) =>{
  const uid = req.body.uid;
  try{
    const userDetails = await User.getDetails(uid);
    res.status(201).json({ userDetails: userDetails[0][0] });

  }catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try{
    const user = await User.find(email);
    if(user[0].length !== 1){
      const error = new Error('A user with this email could not be found.');
      error.statusCode = 401;
      throw error;
    }
    const storedUser = user[0][0];
    const isEqual = await bcrypt.compare(password, storedUser.userpassword);
    if(!isEqual){
      const error = new Error('Worng password!');
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        email: storedUser.useremail,
        uid: storedUser.userid
      },
      'secretfortoken',
      { expiresIn: '1h'}
    );
    res.status(200).json({token:token,uid:storedUser.userid});
  }catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

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
  const bhour = req.body.bhour;


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
      blogo: blogo,
      bhour: bhour
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

