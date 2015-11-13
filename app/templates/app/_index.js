var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  initializing: function() {
    this.author = { name: 'Full Name', email: 'handle@domain.tld'};
    this.appname = this.appname.replace(' ', '-');
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
    }
  },

  configuring: {
  },

  default: {
  },

  writing: {
  },

  conflicts: {
  },

  install: {
  },

  end: {
  }
});
