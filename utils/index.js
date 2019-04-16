const Inflector = require("inflected");

module.exports = answers => {
  const { componentName, dirSource, moduleName } = answers || {};

  const normalized = {
    ...answers,
    COMPONENT_NAME: Inflector.underscore(componentName).toUpperCase(),
    ComponentName: Inflector.camelize(Inflector.underscore(componentName)),
    componentName: Inflector.camelize(
      Inflector.underscore(componentName),
      false
    ),
    componentNameDasherized: Inflector.dasherize(
      Inflector.underscore(componentName)
    ).toLowerCase(),
    componentNamePlural: Inflector.pluralize(componentName).toLowerCase(),
    dirSource,
    ModuleName: Inflector.camelize(Inflector.underscore(moduleName)),
    moduleName: Inflector.camelize(Inflector.underscore(moduleName), false),
    moduleNameDasherized: Inflector.dasherize(
      Inflector.underscore(moduleName)
    ).toLowerCase()
  };

  return normalized;
};
