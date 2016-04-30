'use strict';

var PageView = require('../framework/page');
var model = require('../models/countingGame');

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
            window.App.navigate('question');
      }
  },

  goToGame: function(){
      this.navigateToFirstGame(this.movementEnabled);
  },

  render: function() {
    model.initialize([
      {
        text: 'How many stars do you see?',
        img: '/images/stars.png',
        choices: [5, 6, 3, 8],
        answer: 6
      },
      {
        text: 'How many cars do you see?',
        img: '/images/cars.png',
        choices: [4, 1, 5, 3],
        answer: 4
      },
      {
        text: 'How many fish do you see?',
        img: '/images/fish.png',
        choices: [1, 2, 3, 4],
        answer: 2
      },
      {
        text: 'How many flowers do you see?',
        img: '/images/flowers.png',
        choices: [3, 1, 5, 2],
        answer: 3
      },
      {
        text: 'How many trees do you see?',
        img: '/images/trees.png',
        choices: [4, 5, 8, 6],
        answer: 5
      }
    ]);

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
