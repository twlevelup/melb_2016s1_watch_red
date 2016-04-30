'use strict';

var PageView = require('../framework/page');
var model = require('../models/countingGame');
var repository = require('../models/questionRepository');

var InstructionView;
InstructionView = PageView.extend({

  id: 'instructionPage',

  template: require('../../templates/pages/instructionPage.hbs'),

  buttonEvents: {
      bottom : 'goToGame'
  },

  changeArrow : function(currToFlash){ 

        if ( currToFlash === "lArrow"){
            return "tArrow";
        }
        else if (currToFlash === "tArrow"){
            return "rArrow";
        }else if (currToFlash === "rArrow"){
            return "okButton";
        }else if (currToFlash === "okButton"){
            return "lArrow";
        }

        return null;
  },

  initialize: function() {

    this.currToFlash = "lArrow";
    this.movementEnabled = false;

  },

  navigateToFirstGame: function(shouldMove){
      if(shouldMove){
            window.clearInterval(this.toggleFlash);
            window.clearInterval(this.enableMovement);
            window.App.navigate('question1');
      }
  },

  goToGame: function(){
      this.navigateToFirstGame(this.movementEnabled);
  },

  render: function() {
    model.initialize(repository.getRandom(5));

    this.$el.html(this.template());

    this.toggleFlash = setInterval(function() {
        document.getElementById("tArrow").classList.remove("flash");
        document.getElementById("lArrow").classList.remove("flash");
        document.getElementById("rArrow").classList.remove("flash");
        document.getElementById("okButton").classList.remove("flash");
        document.getElementById(this.currToFlash).classList.add("flash");
        this.currToFlash = this.changeArrow(this.currToFlash);

    }.bind(this),2000);

    this.enableMovement = setInterval(function() {
        this.movementEnabled = true;
    }.bind(this),10000);


    return this;
  }

});

module.exports = new InstructionView();
