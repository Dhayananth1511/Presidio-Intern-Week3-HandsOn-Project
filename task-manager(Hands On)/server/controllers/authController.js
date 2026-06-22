const authService = require('../services/authService');
const { COOKIE_NAME, COOKIE_MAX_AGE } = require('../config/constants');

/**
 * Handles user login request
 */
exports.login = (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email required' });

  const token = authService.generateToken({ email });

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE
  });

  res.json({ message: 'Login successful', user: email.split('@')[0] });
};

/**
 * Returns current authenticated user profile
 */
exports.getMe = (req, res) => {
  // The user data is attached to the request by the authMiddleware
  if (!req.user) return res.status(401).json({ message: 'Not authenticated' });
  
  res.json({ user: req.user.email.split('@')[0] });
};

/**
 * Handles user logout
 */
exports.logout = (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.json({ message: 'Logged out successfully' });
};
