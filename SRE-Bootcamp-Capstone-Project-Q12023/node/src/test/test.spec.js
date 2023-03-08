import { loginFunction } from '../services/login';
import { protectFunction } from '../services/protected';
// jest.mock('../db/dbQuery.js')
// const const { findUserByUsername } = require('../db/dbQuery');

describe('loginFunction()', () => {
  it('Test login', async () => {
    // findUserByUsername.mockImplementation(() => Promise.resolve({}));
    const result = await loginFunction('admin', 'secret');
    expect("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI")
    .toBe(result);
  });

  it('Test login wrong credentials', async function () {
    // findUserByUsername.mockImplementation(() => Promise.resolve({}));
    const result = await loginFunction('admin', 'nocorrectpassword');
    expect(null)
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
