/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap/scss',
        'bower_components/font-awesome/scss'
      ]
    },
    autoprefixer: {
      browsers: ['last 2 versions'],
      cascade: false
    }
  });

  return app.toTree();
};
