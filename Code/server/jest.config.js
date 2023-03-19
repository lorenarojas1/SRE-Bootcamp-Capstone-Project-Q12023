module.exports = {
    transform: {
      '\\.[jt]sx?$': 'babel-jest',
    },
    modulePathIgnorePatterns: ['<rootDir>/build/'],
  };