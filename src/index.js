/*
 * Assumptions made:
 * The program only reads digits from 0-9 directly on keypress,
 * instead of letting the user type 2 or more and read it on submit.
 */

import gameInterface from "./js/gameInterface";
// import { xyObjectFactory, validateXyObject } from "./js/objectHandler";
// import messages from "./js/messages";
// import Game from "./js/Game";
import "./scss/main.scss";

gameInterface();

// let game;
// let table = xyObjectFactory(false, false);
// let cube = xyObjectFactory(false, false);

// const playGame = (number, type) => {
//   if (type === "table" && !validateXyObject(table)) {
//     if (!table.x) {
//       table.x = number;
//       messageUserInConsole(`${type} x-axis set to ${number}`);
//     } else {
//       table.y = number;
//       messageUserInConsole(
//         `${type} y-axis set to ${number}, now type a number between 0 and ${table.x} for the placement of the cubes x-axis:`
//       );
//     }
//   } else if (type === "cube" && !validateXyObject(cube)) {
//     if (!cube.x) {
//       cube.x = number;
//       messageUserInConsole(
//         `${type} x-axis set to ${number}, now type a number between 0 and ${table.y} for the placement of the cubes y-axis:`
//       );
//     } else {
//       cube.y = number;
//       messageUserInConsole(`${type} y-axis set to ${number}`);
//       console.log("lets play");
//       game = new Game(table, cube);
//       window.removeEventListener("keypress", handleKeyPress, false);
//       window.addEventListener("keypress", (e) => {
//         game.round(e.key);
//       });
//     }
//   }
// };

// function handleKeyPress(e) {
//   let low = 0;
//   let high = 9;
//   let input = parseInt(e.key);
//   let type = !validateXyObject(table) ? "table" : "cube";
//   if (typeof input === "number" && input >= low && input <= high) {
//     playGame(e.key, type);
//   }
// }
// window.addEventListener("keypress", handleKeyPress, false);

// function messageUserInConsole(message) {
//   const decor = "\n**************************************************\n";
//   console.log(`${decor}\n${message}\n${decor}`);
// }

// window.addEventListener("load", () => {
//   messageUserInConsole(messages[0]);
// });
