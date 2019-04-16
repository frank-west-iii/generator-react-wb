const Generator = require("yeoman-generator");
const normalize = require("../../utils");

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.option("dirSource", {
      alias: "d",
      desc: "The source code directory",
      type: String,
      required: true,
      default: "src"
    });

    this.option("moduleName", {
      alias: "m",
      desc: "The module name",
      type: String,
      required: true
    });

    this.option("componentName", {
      alias: "c",
      desc: "The component name",
      type: String,
      required: true
    });
  }

  prompting() {
    if (this.hasRequiredInputs()) {
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

      return Promise.resolve();
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("component-spec.js"),
      this.destinationPath(
        `${this.answers.dirSource}/screens/${this.answers.ModuleName}/${
          this.answers.ComponentName
        }/__tests__/component.test.js`
      ),
      this.answers
    );
  }

  hasRequiredInputs() {
    const { componentName, dirSource, moduleName } = this.options;

    return componentName && dirSource && moduleName;
  }
};
