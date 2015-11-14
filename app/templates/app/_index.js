var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  helper: {
    cleanAppname: function(appname) {
      var appname = appname.replace(/\s/g, '-');

      return appname;
    }
  },

  initializing: function() {
    this.author = { name: '<%= author.name %>', email: '<%= author.email %>'};
    this.appname = cleanAppname(this.appname);
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
        this.appname = cleanAppname(answers.appname);

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
