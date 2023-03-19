const jwt = require('jsonwebtoken');
import { config } from '../config';

export const protectFunction = (token) => {
  try {
  jwt.verify(token, config.JWT_KEY);
    return 'You are under protected data';
  } catch (err) {
    console.log('Invalid JWT Token!');
    return null;
  }
};