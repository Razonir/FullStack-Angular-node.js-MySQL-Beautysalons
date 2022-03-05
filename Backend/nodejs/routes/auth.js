const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const User = require('../models/user');
const Business = require('../models/business');
const authController = require('../controllers/auth');
const businessController = require('../controllers/business');
const userController = require('../controllers/user');
const db = require('../util/database')
const jwt = require('jsonwebtoken');


exportbid = Business.bid;

//all users data
router.get('/business', businessController.fetchAll);

//all users data
router.get('/users', userController.fetchAllUsers ); 

//delete user
router.delete('/users/:userid',(req,res,next)=>{
  User.deleteuser(req.params.userid)
  .then(result =>{
    res.status(200).json({
    })
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
})

//business by id
router.get('/business/:bid',(req,res,next)=>{
  Business.findById(req.params.bid)
  .then(result =>{
    res.status(200).json({
      business:result
    })
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
})


//user signup
router.post(
  '/signup',
  [
    body('userfname').trim().not().isEmpty(),
    body('userlname').trim().not().isEmpty(),
    body('useremail').isEmail().normalizeEmail().not().isEmpty(),
      body('userpassword').trim().not().isEmpty(),
      body('usercity').trim().not().isEmpty(),
      body('useraddress').trim().not().isEmpty(),
      body('userphone').trim().not().isEmpty()
    ],
  authController.signup
);

//business signup
router.post(
  '/signupbusiness',
  [
    body('bfname').trim().not().isEmpty(),
    body('blname').trim().not().isEmpty(),
      body('bname').trim().not().isEmpty(),
      body('bdescription').trim().not().isEmpty(),
      body('bdescriptionf').trim().not().isEmpty(),
      body('bdescriptions').trim().not().isEmpty(),
      body('bemail').isEmail().normalizeEmail().not().isEmpty(),
      body('bpassword').trim().not().isEmpty(),
      body('bcity').trim().not().isEmpty(),
      body('baddress').trim().not().isEmpty(),
      body('bphone').trim().not().isEmpty(),
      body('bsubject').trim().not().isEmpty(),
      body('blogo').trim().not().isEmpty(),
      body('bhour').trim().not().isEmpty(),
    ],
  authController.signupbusiness
);

//user login
router.post('/login',   authController.login);
router.post('/',authController.getUserDetails);
router.get('/username'), verifyToken,function(req,res,next){
  return res.status(200).json(decodedToken.userfname);
}

// token verify
var decodedToken ='';
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secret',function(err,tokendata){
    if(err){
      return res.status(400).json({message: 'Inauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
    }
  })
}

module.exports = router;