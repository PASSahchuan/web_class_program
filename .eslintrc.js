module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: "airbnb", //使用airbnb規則
  parserOptions: {
    ecmaFeatures: {
      "parserOptions.ecmaVersion": true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["html", "jsx-a11y", "import"],
  rules: {
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: "Unexpected property on console object was called"
      }
    ]
  }
};
