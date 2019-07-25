# minesweeper-api-test
Minesweeper api challenge by Pablo Rodriguez Massuh

## Interface

#### GET operations
* **/createGame** It creates a new Game in status 'STARTED'. 
The game consists of a square board of 8 x 8 cells and 10 bombs. The bombs are randomly located. This api call returns:
    ```javascript
    {
      status: "STARTED",
      created: "2019-07-25T17:36:46.707Z"
    }
    ```
  



* **/createTestGame** Similar to **/createGame** but it always creates the following board with only 2 bombs:  
    ```javascript
    +-----------------+
    | N N N N N N N N |
    | N N N B N N N N |
    | N N N N N N N N |
    | N B N N N N N N |
    | N N N N N N N N |
    | N N N N N N N N |
    | N N N N N N N N |
    | N N N N N N N N |   
    +-----------------+
  ```
  
  Where **N** means "Nothing" and **B** means "Bomb".

* **/game** return the current status of the game, elapsed time in seconds from the start and all uncovered positions
     ```javascript
    {
        status: "STARTED",
        created: "2019-07-25T17:46:06.791Z",
        elapsedTimeInSeconds: 16,
        uncoveredPositions: [
          { x: 0, y: 0 },
          { x: 0, y: 1 },
          { x: 0, y: 2 },
          { x: 1, y: 0 },
          { x: 1, y: 1 },
          { x: 1, y: 2 },
          { x: 2, y: 0 },
          { x: 2, y: 1 },
          { x: 2, y: 2 }
        ]
    }
    ```

#### POST operation

* **/revealPosition** A position has an **x** and **y** properties. A valid position is in range (0-7, 0-7). This POST operation receives a position:
  ```javascript
    {
      x: 0,
      y: 0
    }
    ```
  and returns the game status after that

     ```javascript
    {
        status: "STARTED",
        created: "2019-07-25T18:02:56.896Z",
        elapsedTimeInSeconds: 105,
        uncoveredPositions: [
          { x: 0, y: 0 }
        ]
    }
    ```

## Start application
After cloning the git repository, execute: 

```javascript
$ npm start
```

And the app will be running on http://localhost:3000/

## Running tests
To execute the tests just do in the console: 

```javascript
$ cd [your_project]
$ npm test
```

and you will see the results:

```javascript
  Board Test 
    Creating a new Board 
      ✓ should have 10 bombs
      ✓ should assign neighbors for all empty Cells
      and revealing position (0,0)
        ✓ should change that cell status
      and revealing invalid position (-2,14)
        ✓ should return false
    Revealing cell (0,0)
      ✓ should assign status UNCOVERED for all empty neighbors in a recurse way until a neighbor is a bomb.
      ✓ should calculated UNCOVERED positions.

  Cell Test 
    Creating a new Cell 
      ✓ should have status COVERED
    Creating a new empty Cell 
      ✓ should display N
    Creating a new Cell with a Bomb 
      ✓ should display B
    reveal a new Cell 
      ✓ should change status to UNCOVERED
    reveal an UNCOVERED Cell 
      ✓ should not change UNCOVERED status 
    For a Cell 
      ✓ should be possible to add other cell as neighbor 

  Game Test 
    Starting a new Game 
      ✓ should have status STARTED
      ✓ should have creation date
      ✓ should not have finished date
    Playing a new Game 
      ✓ should have status LOST after revealing a Bomb
      ✓ should have finished date after loosing
      ✓ should have status WON after revealing all empty Cells
      ✓ should have finished date after winning


  19 passing (15ms)
```
