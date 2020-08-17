// Class
class Cube {
  constructor(x, y) {
    let direction = [0, 1, 2, 3];
    this.x = x;
    this.y = y;
    this.dir = direction[0];

    // window.addEventListener("keypress", this.rotate);
  }

  moveForwards() {}

  moveBackwards() {}

  rotate(e) {
    console.log(parseInt(e.key));
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
