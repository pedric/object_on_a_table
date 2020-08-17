// import Table from "./js/Table";
// import Cube from "./js/Cube";
import messages from "./js/messages";
import Game from "./js/Game";
import "./scss/main.scss";

let index = 0;
let game;
let table = { x: false, y: false, set: false };
let cube = { x: false, y: false, set: false };

const playGame = (number, type) => {
  if (type === "table" && !table.set) {
    if (!table.x) {
      table.x = number;
      console.log(`${type} x-axis set to ${number}`);
    } else {
      table.y = number;
      table.set = true;
      console.log(`${type} y-axis set to ${number}`);
    }
  } else if (type === "cube" && !cube.set) {
    if (!cube.x) {
      cube.x = number;
      console.log(`${type} x-axis set to ${number}`);
    } else {
      cube.y = number;
      cube.set = true;
      console.log(`${type} y-axis set to ${number}`);
      console.log("lets play");
      game = new Game(table, cube);
      // game = new Game(table.x, table.y, cube.x, cube.y);
      window.removeEventListener("keypress", handleKeyPress, false);
      window.addEventListener("keypress", (e) => {
        game.round(e.key);
      });
    }
  }
  index++;
  userGuide(index);
};

function handleKeyPress(e) {
  let type = table.set ? "cube" : "table";
  if (typeof parseInt(e.key) === "number") {
    playGame(e.key, type);
  }
}
window.addEventListener("keypress", handleKeyPress, false);

function userGuide(index) {
  console.log("toggle messages to user here");
  console.log(messages[index]);
}

userGuide(index);
