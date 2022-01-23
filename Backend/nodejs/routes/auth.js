const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');

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

module.exports = router;