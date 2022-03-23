module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    "\\.(mp4|webm|ogg|mp3|wav|png|jpg|jpeg|gif|svg)$":
    "<rootDir>/src/test/fileMock.ts"
  },
};