const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');

router.post(
  '/signup',
  [
    body('userfname').trim().not().isEmpty(),
    body('useremail')
      .isEmail()
      .withMessage('Please enter a valid useremail.')
      .custom(async (useremail) => {
        const user = await User.find(useremail);
        if (user[0].length > 0) {
          return Promise.reject('useremail address already exist!');
        }
      })
      .normalizeEmail(),
      body('userpassword').trim().not().isEmpty()
    ],
  authController.signup
);

module.exports = router;