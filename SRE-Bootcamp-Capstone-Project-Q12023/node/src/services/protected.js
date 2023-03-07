const jwt = require('jsonwebtoken');
const crypto = require('crypto');

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