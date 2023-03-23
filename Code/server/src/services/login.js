const jwt = require('jsonwebtoken');
const crypto = require('crypto');
import { config } from '../config';
import { findUserByUsername } from '../db/dbQuery';

export const loginFunction = async (username, password) => {
    try {
      const userobj = await findUserByUsername(username);
      console.log(userobj)
      const hashedPassword = crypto
        .createHash('sha512')
        .update(password + userobj.salt)
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
      return undefined;
    }
  };