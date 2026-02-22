const pool = require('../config/db');

const findUserByEmail = async (email) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0];
};

const createUser = async (email, password, roleId) => {
  const result = await pool.query(
    `INSERT INTO users (email, password, role_id)
     VALUES ($1, $2, $3)
     RETURNING id, email, role_id`,
    [email, password, roleId]
  );

  return result.rows[0];
};

const getRoleByName = async (roleName) => {
  const result = await pool.query(
    'SELECT id FROM roles WHERE name = $1',
    [roleName]
  );

  return result.rows[0];
};

module.exports = {
  findUserByEmail,
  createUser,
  getRoleByName
};