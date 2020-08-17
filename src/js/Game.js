import Table from "./Table";
import Cube from "./Cube";

export default class Game {
  // constructor(tableX, tableY, cubeX, cubeY) {
  //   let direction = [0, 1, 2, 3];
  //   this.table = { x: tableX, y: tableY };
  //   this.cube = { x: cubeX, y: cubeY, dir: direction[0] };
  // }
  constructor(table, cube) {
    this.table = new Table(table.x, table.y);
    this.cube = new Cube(cube.x, cube.y);
  }

  round(number) {
    console.log(`round of game with ${number},`);
    console.log(this.table);
    console.log(this.cube);
  }
}