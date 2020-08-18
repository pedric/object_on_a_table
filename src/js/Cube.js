import { logError } from "./formattedOutput";

class Cube {
  constructor(x, y) {
    let directions = [0, 1, 2, 3];
    this.directions = directions;
    this.x = x;
    this.y = y;
    this.dir = directions[0];
  }

  moveForwards() {
    switch (this.dir) {
      case 0: {
        this.y = this.y - 1;
        break;
      }
      case 1: {
        this.x = this.x + 1;
        break;
      }
      case 3: {
        this.y = this.y + 1;
        break;
      }
      case 4: {
        this.x = this.x - 1;
        break;
      }
      default:
        logError(`Unknown error. Couldn't move forward, try again.`);
    }
  }

  moveBackwards() {
    switch (this.dir) {
      case 0: {
        this.y = this.y + 1;
        break;
      }
      case 1: {
        this.x = this.x - 1;
        break;
      }
      case 3: {
        this.y = this.y - 1;
        break;
      }
      case 4: {
        this.x = this.x + 1;
        break;
      }
      default:
        logError(`Unknown error. Couldn't move forward, try again.`);
    }
  }

  rotate(input) {
    if (input === 3) {
      this.dir = this.dir >= this.directions.length ? 0 : this.dir + 1;
    }
    if (input === 4) {
      this.dir = this.dir <= 0 ? this.directions.length : this.dir - 1;
    }
  }
}

export default Cube;
