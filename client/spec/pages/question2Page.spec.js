
'use strict';



describe('The Question 2 Page', function() {
  var question2Page;
  beforeEach(function(){
    question2Page = require('../../src/js/pages/question2Page');
    var Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
    window.App = App;
	spyOn(window.App, 'navigate');
  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      question2Page.render();
      expect(question2Page.$el).toContainText('question');
    });


  });

});
