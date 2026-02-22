const verifyToken = require('../middleware/auth.middleware');
const authorizeRole = require('../middleware/role.middleware');
const express = require('express');
const router = express.Router();
const { testConnection, registerUser, loginUser} = require('../controllers/auth.controller');

router.get('/test', testConnection);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user
  });
});
router.get(
  '/admin',
  verifyToken,
  authorizeRole([1]), // SOLO ADMIN
  (req, res) => {
    res.json({
      message: 'Welcome Admin',
      user: req.user
    });
  }
);

module.exports = router;