'use strict';

var PageView = require('../framework/page');

var HelloWorldView = Backbone.View.extend({

	template: require('../../templates/pages/helloWorld.hbs'),

	render: function () {
		this.$el.html(this.template());
		return this;
	},

});

module.exports = new HelloWorldView();
