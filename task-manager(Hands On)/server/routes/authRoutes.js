const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public Routes
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// Protected Routes (Uses Middleware)
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;
