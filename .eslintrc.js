module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ["airbnb", "zeal/react", "zeal/jest", "prettier", "prettier/react"],
  rules: { "no-param-reassign": ["error", { props: false }] }
};
