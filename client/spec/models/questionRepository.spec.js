'use strict';

var repo = require('../../src/js/models/questionRepository');

describe('Question repository', function() {
  it('can return a certain number of questions', function() {
    expect(repo.getRandom(2).length).toEqual(2);
    expect(repo.getRandom(4).length).toEqual(4);
  });
});