
let assert = require('assert');
let Cell = require('../../model/Cell.js');
let Bomb = require('../../model/Bomb.js');

describe('Cell Test ', function() {

  describe('Creating a new Cell ', function() {

    let cell = new Cell();

    it('should have status COVERED', function() {
      assert(cell.isInStatus('COVERED'));
    });
  });

  describe('Creating a new empty Cell ', function() {

    let cell = new Cell();

    it('should display N', function() {
      assert.equal(cell.print(), 'N COVERED');
    });

  });

  describe('Creating a new Cell with a Bomb ', function() {

    let cell = new Cell(new Bomb());

    it('should display B', function() {
      assert.equal(cell.print(), 'B COVERED');
    });

  });

  describe('reveal a new Cell ', function() {

    it('should change status to UNCOVERED', function() {

      let cell = new Cell();
      cell.reveal();
      assert(cell.isInStatus('UNCOVERED'));
    });

  });

  describe('reveal an UNCOVERED Cell ', function() {

    it('should not change UNCOVERED status ', function() {

      let cell = new Cell();
      cell.reveal();
      cell.reveal();
      assert(cell.isInStatus('UNCOVERED'));
    });

  });


  describe('For a Cell ', function() {

    it('should be possible to add other cell as neighbor ', function() {

      let cell = new Cell();
      let otherCell = new Cell();
      cell.addNeighbor(otherCell);
      assert(cell.hasNeighbors());
    });

  });

});
