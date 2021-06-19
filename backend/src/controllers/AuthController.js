const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const { email } = req.body;

      if (await User.findOne({ email }))
        return res.status(400).send({ error: 'User already exists' });

      const user = await User.create(req.body);

      user.password = undefined;

      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: 'Regitration failed' });
    }
  },

  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        res.status(400).send({ error: 'User not found' });
      }

      if (!(await bcrypt.compare(password, user.password)))
        return res.status(400).send({ error: 'Invalid password' });

      user.password = undefined;

      res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      console.log(err);
    }
  },
};
