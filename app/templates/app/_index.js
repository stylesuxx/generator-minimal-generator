var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  initializing: function() {
    this.author = { name: '<%= author.name %>', email: '<%= author.email %>'};
    this.appname = this.appname.replace(' ', '-');
  },

  prompting: {
    appname: function() {
      var done = this.async();

      this.prompt({
        type: 'input',
        name: 'appname',
        message: 'Generator name',
        default: this.appname
      }, function(answers) {
        this.appname = answers.appname;

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
