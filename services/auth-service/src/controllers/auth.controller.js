const authService = require('../services/auth.service');

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authService.register(email, password);

    res.status(201).json({
      message: 'User registered successfully',
      user
    });

  } catch (error) {

    if (error.message === 'USER_EXISTS') {
      return res.status(400).json({ error: 'User already exists' });
    }

    res.status(500).json({ error: 'Registration failed' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    res.json({
      message: 'Login successful',
      token
    });

  } catch (error) {

    if (error.message === 'INVALID_CREDENTIALS') {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = { registerUser, loginUser };