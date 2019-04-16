const Generator = require("yeoman-generator");
const normalize = require("../../utils");

module.exports = class extends Generator {
  prompting() {
    // eslint-disable-next-line no-underscore-dangle
    if (this._hasRequiredInputs()) {
      this.answers = normalize({
        dirSource: this.options.dirSource,
        moduleName: this.options.moduleName,
        componentName: this.options.componentName
      });

      return Promise.resolve();
    }

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
        message: "What module?",
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
    this.composeWith(require.resolve("../component-test"), {
      dirSource: this.answers.dirSource,
      moduleName: this.answers.moduleName,
      componentName: this.answers.componentName
    });
  }

  writing() {
    const filenames = ["component", "enhancers", "index", "styles"];

    filenames.forEach(filename => {
      this.fs.copyTpl(
        this.templatePath(`${filename}.js`),
        this.destinationPath(
          `${this.answers.dirSource}/screens/${this.answers.ModuleName}/${
            this.answers.ComponentName
          }/${filename}.js`
        ),
        this.answers
      );
    });
  }

  _hasRequiredInputs() {
    const { componentName, dirSource, moduleName } = this.options;

    return componentName && dirSource && moduleName;
  }
};
