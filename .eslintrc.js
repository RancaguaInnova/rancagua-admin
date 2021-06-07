module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,

    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ["react"],
  extends: [],
  rules: {
    "comma-dangle": 0,
    "react/display-name": 1,
    "no-unused-vars": 0,
    "no-console": 1,
    "no-unexpected-multiline": "warn",
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.13.1",
    },
  },
}
