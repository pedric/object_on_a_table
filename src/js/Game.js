import { logTheRules, logError } from "./formattedOutput";
import Table from "./Table";
import Cube from "./Cube";

export default class Game {
  constructor(table, cube) {
    this.gameOver = false;
    this.table = new Table(table.x, table.y);
    this.cube = new Cube(cube.x, cube.y);
  }

  round(number) {
    if (this.gameOver) {
      logError("Game over, reload browser to try again");
    } else {
      if (number === 3 || number === 4) {
        this.cube.rotate(number);
      } else if (number === 1) {
        this.cube.moveForwards();
      } else if (number === 2) {
        this.cube.moveBackwards();
      } else if (number === 0) {
        this.quit();
      } else {
        logError();
        logTheRules();
      }
      this.isTheCubeStillOnTheTable();
    }
  }

  isTheCubeStillOnTheTable() {
    if (this.cube.x < 0 || this.cube.x > this.table.x) {
      this.gameOver = true;
      this.quit();
    } else if (this.cube.y < 0 || this.cube.y > this.table.y) {
      this.gameOver = true;
      this.quit();
    }
  }

  quit() {
    if (this.gameOver) {
      this.cube.x = -1;
      this.cube.y = -1;
    }
    console.log([this.cube.x, this.cube.y]);
  }
}
