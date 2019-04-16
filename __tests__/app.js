const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

const answers = {
  dirSource: "test",
  moduleName: "test",
  component: "test"
};

describe("generator-react-bc:app", () => {
  beforeAll(() =>
    helpers.run(path.join(__dirname, "../generators/app")).withPrompts(answers)
  );

  it("creates files", () => {
    const { dirSource, moduleName } = answers;

    assert.file([`${dirSource}/modules/${moduleName}/index.js`]);
  });
});
