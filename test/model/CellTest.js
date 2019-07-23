
let assert = require('assert');
let Cell = require('../../model/Cell.js');

describe('Cell Test ', function() {

  describe('Creating a new Cell ', function() {

    let cell = new Cell();

    it('should have status COVERED', function() {
      assert.equal(cell.isInStatus('COVERED'), true);
    });

  });
});
