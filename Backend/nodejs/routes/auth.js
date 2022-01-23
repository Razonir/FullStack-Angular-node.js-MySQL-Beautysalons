const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const User = require('../models/user');
const Business = require('../models/business');
const authController = require('../controllers/auth');
const businessController = require('../controllers/business');
const db = require('../util/database')

router.get('/business', businessController.fetchAll);

router.get('/business/1', businessController.getOne);

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

router.post(
  '/signupbusiness',
  [
    body('bfname').trim().not().isEmpty(),
    body('blname').trim().not().isEmpty(),
      body('bname').trim().not().isEmpty(),
      body('bdescription').trim().not().isEmpty(),
      body('bemail').isEmail().normalizeEmail().not().isEmpty(),
      body('bpassword').trim().not().isEmpty(),
      body('bcity').trim().not().isEmpty(),
      body('baddress').trim().not().isEmpty(),
      body('bphone').trim().not().isEmpty(),
      body('bsubject').trim().not().isEmpty(),
      body('blogo').trim().not().isEmpty(),
    ],
  authController.signupbusiness
);


module.exports = router;