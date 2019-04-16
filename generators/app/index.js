const Generator = require("yeoman-generator");
const normalize = require("../../utils");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        name: "dirSource",
        type: String,
        required: true,
        message: "Where is your source directory?",
        default: "src",
        store: true
      },
      {
        name: "moduleName",
        type: String,
        required: true,
        message: "What screen?",
        store: true
      },
      {
        name: "componentName",
        type: String,
        required: true,
        message: "What component?",
        store: true
      }
    ]).then(answers => {
      this.answers = normalize(answers);
    });
  }

  default() {
    this.composeWith(require.resolve("../component"), {
      dirSource: this.answers.dirSource,
      moduleName: this.answers.moduleName,
      componentName: this.answers.componentName
    });
  }
};
