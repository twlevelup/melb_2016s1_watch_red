'use strict';

var contactsPage = require('../../src/js/pages/helloWorldPage'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app');

window.App = App;

describe('The Contacts Page', function() {

  describe('rendering', function() {

    it('should say "Hello World!" to the use', function() {
      contactsPage.render();
      expect(contactsPage.$el).toContainHtml('<h1>Hello World!</h1>');
    });

  });

});
