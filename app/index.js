'use strict';
var path = require('path');
var paramCase = require('param-case');
var camelCase = require('camel-case');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ModulifyGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantastic Modulify generator.'));
    // @todo: can we just supply a default via this.argument?
    this.argument('projName', {
      type: String,
      required: false,
      optional: true,
      defaults: 'app',
      desc: 'name for your project',
      banner: 'Used in package.json and Makefile. This will also be the namespace used by browserify standalone'
    });

    this.on('end', function () {
      this.postInitialization();

      if (!this.options['skip-install']) {
        this.npmInstall();
      }
    });
  },

  postInitialization: function () {
    this.projModuleName = paramCase(this.projName);
    this.projNamespace = camelCase(this.projName);
  },

  projectfiles: function () {
    this.mkdir('lib');
    this.mkdir('test');

    this.copy('_app.js', 'lib/' + this.projModuleName + '.js');
    this.copy('_test.js', 'test/' + this.projModuleName + '-test.js');

    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('_package.json', 'package.json');
    this.copy('_Makefile', 'Makefile');
  }
});

module.exports = ModulifyGenerator;
