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

  changeArrow : function(currArrow){ 

        if ( currArrow === "lArrow"){
            return "tArrow";
        }
        else if (currArrow === "tArrow"){
            return "rArrow";
        }else if (currArrow === "rArrow"){
            return "lArrow";
        }

        return null;
  },

  initialize: function() {

    this.render();    
    this.currArrow = "lArrow";
    setInterval(function() {
        document.getElementById("tArrow").classList.remove("flash");
        document.getElementById("lArrow").classList.remove("flash");
        document.getElementById("rArrow").classList.remove("flash");
        document.getElementById(this.currArrow).classList.add("flash");
        this.currArrow = this.changeArrow(this.currArrow);

    }.bind(this),2000);


    /*
    setInterval(function() {
        if ( this.currArrow === "lArrow"){
                document.getElementById(this.currArrow).style["color"] = "red";
        }
        else if (currArrow === "rarrow"){

        }else if (currArrow === "tarrow"){

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

