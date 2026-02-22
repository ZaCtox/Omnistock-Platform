const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user.repository');

const register = async (email, password) => {

  const existingUser = await userRepository.findUserByEmail(email);

  if (existingUser) {
    throw new Error('USER_EXISTS');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const role = await userRepository.getRoleByName('SELLER');

  const newUser = await userRepository.createUser(
    email,
    hashedPassword,
    role.id
  );

  return newUser;
};

const login = async (email, password) => {

  const user = await userRepository.findUserByEmail(email);

  if (!user) {
    throw new Error('INVALID_CREDENTIALS');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('INVALID_CREDENTIALS');
  }

  const token = jwt.sign(
    {
      userId: user.id,
      roleId: user.role_id
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return token;
};

module.exports = { register, login };