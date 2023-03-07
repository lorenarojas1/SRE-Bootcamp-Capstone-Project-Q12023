import { findUserByUsername } from '../db/db';
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
import { config } from '../config';

export const loginFunction = async (username, input_password) => {
    try {
      findUserByUsername(username);
      const hashedPassword = crypto
        .createHash('sha512')
        .update(input_password + userobj.salt)
        .digest('hex');
      if (!hashedPassword.localeCompare(userobj.password)) {
        const tokenJWT = jwt.sign(
          {
            role: userobj.role,
          },
          config.JWT_KEY,
          {
            noTimestamp: true,
          }
        );
        return tokenJWT;
      }
      return null;
    } catch (err) {
      console.error(err);
    }
  };