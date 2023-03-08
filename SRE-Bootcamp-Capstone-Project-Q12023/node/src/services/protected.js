const jwt = require('jsonwebtoken');
import { config } from '../config';

export const protectFunction = (token) => {
  try {
    const user = jwt.verify(token, config.JWT_KEY);
    console.log(user)
    if (user) {
      return 'You are under protected data';
    }
    return null;
  } catch (err) {
    console.error('Invalid JWT Token!');
    return null;
  }
};