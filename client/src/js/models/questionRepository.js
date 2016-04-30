'use strict';

module.exports = {
  questions: [
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
  ],
  getRandom: function(count) {
    var result = this.questions.slice(0);
    
    for (var i = 0; i < result.length; i++) {
      var j = Math.floor(Math.random() * result.length);
      var temp = result[j];
      result[j] = result[i];
      result[i] = temp;
    }
    
    return result.slice(0, count);
  }
};