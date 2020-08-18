import { xyObjectFactory, validateXyObject } from "./objectHandler";
import { messageUserInConsole, logTheRules, logError } from "./formattedOutput";
import messages from "./messages";
import Game from "./Game";

export default function gameInterface() {
  let game;
  let table = xyObjectFactory(false, false);
  let cube = xyObjectFactory(false, false);

  const playGame = (number, type) => {
    if (type === "table" && !validateXyObject(table)) {
      if (!table.x) {
        table.x = number;
        messageUserInConsole(`${type} x-axis set to ${number}`);
      } else {
        table.y = number;
        messageUserInConsole(
          `${type} y-axis set to ${number}, now type a number between 0 and ${table.x} for the placement of the cubes x-axis:`
        );
      }
    } else if (type === "cube" && !validateXyObject(cube)) {
      if (!cube.x) {
        cube.x = number;
        messageUserInConsole(
          `${type} x-axis set to ${number}, now type a number between 0 and ${table.y} for the placement of the cubes y-axis:`
        );
      } else {
        cube.y = number;
        messageUserInConsole(`${type} y-axis set to ${number}.\nTime to play!`);
        logTheRules();
        startGame(table, cube);
      }
    }
  };

  function handleKeyPress(e) {
    let low = 0;
    let high = 9;
    let input = parseInt(e.key);
    let type = !validateXyObject(table) ? "table" : "cube";
    if (validateKeyPress(input, type)) {
      playGame(e.key, type);
    } else {
      logError(
        `Invalid input, try again.\nYou probably try to place the cube outside of the table which is ${table.x} by ${table.y}\nor try to enter a charachter whics is not a number.`
      );
    }
  }
  window.addEventListener("keypress", handleKeyPress, false);

  function validateKeyPress(number, type) {
    let low = 0;
    let high = 9;
    if (type === "cube" && !cube.x) {
      high = table.x;
    } else if (type === "cube" && cube.x) {
      high = table.y;
    }
    if (typeof number === "number" && number >= low && number <= high) {
      return true;
    }
    return false;
  }

  function startGame(table, cube) {
    game = new Game(table, cube);
    window.removeEventListener("keypress", handleKeyPress, false);
    window.addEventListener("keypress", (e) => {
      game.round(e.key);
    });
  }

  messageUserInConsole(messages["welcome"]);
}
