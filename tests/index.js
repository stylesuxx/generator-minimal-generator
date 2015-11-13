var test = require('tape');
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

test('generator:app', function (t) {
  t.plan(3);

  helpers.run(path.join(__dirname, '../app'))
    .withPrompts({
      name: 'my generator',
      description: 'A test generator',
      authorName: 'Some Name',
      authorEmail: 'some@name.tld'
    })
    .on('end', function() {
      var expected = [
        'README.md',
        'package.json',
        '.gitignore',
        'app/index.js'
      ];

      assert.file(expected);
      t.ok(true, 'copies all needed files');

      assert.JSONFileContent('package.json', {
        name: 'generator-my-generator',
        keywords: ['yeoman-generator'],
        description: 'A test generator',
        author: 'Some Name <some@name.tld>',
        repository: "githubUser/generator-my-generator"
      });
      t.ok(true, 'fills package.json with correct information');

      assert.fileContent('README.md', '# generator-my-generator');
      assert.fileContent('README.md', '>A test generator');
      assert.fileContent('README.md', 'sudo npm install generator-my-generator -g');
      assert.fileContent('README.md', 'mkdir generator-my-generator');
      assert.fileContent('README.md', 'yo generator-my-generator');
      t.ok(true, 'fills README.md with project data');
    });
});
