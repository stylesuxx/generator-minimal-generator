'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  helper: {
    cleanAppname: function(appname) {
      var appname = appname.replace(/\s/g, '-');
      var prefix = 'generator-';
      if(appname.slice(0, prefix.length) !== prefix) {
        appname = prefix + appname;
      }

      return appname;
    }
  },

  initializing: function() {
    this.author = { name: 'Full Name', email: 'handle@domain.tld'};
    this.appname = this.helper.cleanAppname(this.appname);
    this.description = 'Generator description';
    this.packages = ['yeoman-generator'];
  },

  prompting: {
    appname: function() {
      var done = this.async();

      this.prompt({
        type: 'input',
        name: 'name',
        message: 'Generator name',
        default: this.appname
      }, function(answers) {
        this.appname = this.helper.cleanAppname(answers.name);

        done();
      }.bind(this));
    },

    description: function() {
      var done = this.async();

      this.prompt({
        type: 'input',
        name: 'description',
        message: 'Generator description',
        default: this.description
      }, function(answers) {
        this.description = answers.description;

        done();
      }.bind(this));
    },

    authorName: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'authorName',
        message: 'Your name',
        default: this.author.name
      }, function(answers) {
        this.author.name = answers.authorName;

        done();
      }.bind(this));
    },

    authorMail: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'authorEmail',
        message: 'Your E-Mail address',
        default: this.author.email
      }, function(answers) {
        this.author.email = answers.authorEmail;

        done();
      }.bind(this));
    },
  },

  writing: {
    copyStatics: function() {
      this.copy('.gitignore', '.gitignore');
      this.copy('.gitignore', 'templates/.gitignore');
    },

    copyTemplates: function() {
      this.template('_README.md', 'README.md');
      this.template('_package.json', 'package.json');
      this.template('app/_index.js', 'app/index.js');
    }
  },

  install: function() {
    this.npmInstall(this.packages, {'save': true});
  }
});
