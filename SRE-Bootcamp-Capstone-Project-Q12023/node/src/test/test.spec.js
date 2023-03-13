import { describe } from 'node:test';
import { loginFunction } from '../services/login';
import { protectFunction } from '../services/protected';
import * as controllerMask from '../services/controllerMask'
// jest.mock('../db/dbQuery.js')
// const const { findUserByUsername } = require('../db/dbQuery');

describe('loginFunction()', () => {
  it('Test login', async () => {
    // findUserByUsername.mockImplementation(() => Promise.resolve({}));
    const result = await loginFunction('admin', 'secret');
    expect("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI")
    .toBe(result);
  });

  it('Test login wrong password', async function () {
    // findUserByUsername.mockImplementation(() => Promise.resolve({}));
    const result = await loginFunction('admin', 'nocorrectpassword');
    expect(null)
    .toBe(result);
  });
  it('Test login wrong credentials', async function () {
    // findUserByUsername.mockImplementation(() => Promise.resolve({}));
    const result = await loginFunction('user', 'incorrectpassword');
    expect(undefined)
    .toBe(result);
  });
});

describe('protectFunction()', () => {
  it('Test protected', () => {
    let result = protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI");
    expect('You are under protected data').toStrictEqual(result)
  });

  it('Test protected Endpoint with no valid jwt token', () => {
    let result = protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI_dataextra")
    expect(null).toStrictEqual(result);
  });
});

describe('ipv4ValidationFunction()', () => {
  it('Test ipv4 validation', () => {
    let result = controllerMask.ipv4ValidationFunction('255.255.0.0')
    expect(true).toStrictEqual(result);
  });
  it('Test ipv4 validation with incorrect IP', () => {
    let result = controllerMask.ipv4ValidationFunction('255.-54.a.o')
    expect(false).toStrictEqual(result);
  });
});

describe('cidrToMaskFunction()', () => {
  it('Test cidr to mask', () => {
    let result = controllerMask.cidrToMaskFunction('24')
    expect('255.255.255.0').toStrictEqual(result);
  });
  it('Test cidr to mask with incorrect input', () => {
    let result = controllerMask.cidrToMaskFunction('ff')
    expect('No value provided').toStrictEqual(result);
  });
});
