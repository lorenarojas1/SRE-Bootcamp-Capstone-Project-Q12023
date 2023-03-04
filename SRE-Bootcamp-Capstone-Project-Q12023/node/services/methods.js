import { findUserByUsername } from '../db/db';
import { config } from '../config';
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

//health
export const health = (req, res, next) => {
  res.send('OK');
  next();
};
/* This database data is here just for you to test, please, remember to define your own DB
# You can test with username = admin, password = secret  
# This DB has already a best practice: a salt value to store the passwords*/
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

export const protectFunction = (authorization) => {
  try {
    const user = jwt.verify(authorization, secret);
    if (user) {
      return 'You are under protected data';
    }
    return null;
  } catch (err) {
    console.error('Invalid JWT Token!');
    return null;
  }
};

//cidrtomask
export const cidrToMaskFunction = (value) => {
  //console.log(value);
  return value;
};
//masktocidr
export const maskToCidrFunction = (value) => {
  //console.log(value);
  return value;
};
//ipv4validation
export const ipv4ValidationFunction = (value) => {
  //console.log(value);
  return true;
};
