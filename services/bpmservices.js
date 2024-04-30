// services/UserService.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/models');

async function authenticateUser(username, password) {
  const user = await User.findOne({ username });
  if (!user) return null;
  
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return null;
  
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
  return token;
}

module.exports = {
  authenticateUser
};
