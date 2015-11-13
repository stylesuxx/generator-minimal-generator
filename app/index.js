'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  initializing: function() {
    this.author = { name: 'Full Name', email: 'handle@domain.tld'};
    this.appname = this.appname.replace(/\s/g, '-');
    var prefix = 'generator-';
    if(this.appname.slice(0, prefix.length) !== prefix) {
      this.appname = prefix + this.appname;
    }
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
        this.appname = answers.name;

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
        name: 'name',
        message: 'Your name',
        default: this.author.name
      }, function(answers) {
        this.author.name = answers.name;

        done();
      }.bind(this));
    },

    authorMail: function() {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'email',
        message: 'Your E-Mail address',
        default: this.author.email
      }, function(answers) {
        this.author.email = answers.email;

        done();
      }.bind(this));
    },
  },

  writing: {
    copyStatics: function() {
      this.copy('.gitignore', '.gitignore');
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
