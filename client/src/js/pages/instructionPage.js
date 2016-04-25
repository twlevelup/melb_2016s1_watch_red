'use strict';

var PageView = require('../framework/page');

var InstructionView;
InstructionView = PageView.extend({

  id: 'instructionPage',

  template: require('../../templates/pages/instructionPage.hbs'),

  buttonEvents: {
    //right: 'goToHomePage',
    //face: 'screenClickExample',
    //left: 'back'
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

    this.render();    
    this.currToFlash = "lArrow";
    setInterval(function() {
        document.getElementById("tArrow").classList.remove("flash");
        document.getElementById("lArrow").classList.remove("flash");
        document.getElementById("rArrow").classList.remove("flash");
        document.getElementById("okButton").classList.remove("flash");
        document.getElementById(this.currToFlash).classList.add("flash");
        this.currToFlash = this.changeArrow(this.currToFlash);

    }.bind(this),2000);


    /*
    setInterval(function() {
        if ( this.currToFlash === "lArrow"){
                document.getElementById(this.currToFlash).style["color"] = "red";
        }
        else if (currToFlash === "rarrow"){

        }else if (currToFlash === "tarrow"){

        }
    }.bind(this),200);
    */
  },

  /*screenClickExample: function() {
    this.$el.html('<div>Oh noes!</div>');
  },
  */

  /*
  goToHomePage: function() {
    window.App.navigate('');
  },
  */

  render: function() {

    this.$el.html(this.template());

    return this;
  }

});

module.exports = new InstructionView();

