// Class
class Cube {
  constructor(x, y) {
    let directions = [0, 1, 2, 3];
    this.directions = directions;
    this.x = x;
    this.y = y;
    this.dir = directions[0];

    // window.addEventListener("keypress", this.rotate);
  }

  moveForwards() {
    console.log(`Move forwards`);
  }

  moveBackwards() {
    console.log(`Move backwards`);
  }

  rotate(e) {
    console.log(`rotate : ${e}`);
  }
}

// factory function
// function Cube(x, y) {
//   return {
//     x,
//     y,
//   };
// }

// Constructor function
// function Cube(x, y) {
//   this.x = x;
//   this.y = y;
// }

export default Cube;
