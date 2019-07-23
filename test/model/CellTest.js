
let assert = require('assert');
let Cell = require('../../model/Cell.js');

describe('Cell Test ', function() {

  describe('Creating a new Cell ', function() {

    let cell = new Cell();

    it('should have status COVERED', function() {
      assert.equal(cell.isInStatus('COVERED'), true);
    });

  });

  describe('reveal a new Cell ', function() {

    it('should change status to UNCOVERED', function() {

      let cell = new Cell();
      cell.reveal();
      assert.equal(cell.isInStatus('UNCOVERED'), true);
    });

  });
});
