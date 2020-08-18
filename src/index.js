/*
 * Assumptions made:
 * The program only reads digits from 0-9 directly on keypress,
 * instead of letting the user type 2 or more and read it on submit.
 * The simulation quits instantly if the object falls off the table.
 * Make sure you focus the browser window since the eventlisteners for
 * input is attached to the window object.
 * typing in the console wont work.
 */

import gameInterface from "./js/gameInterface";
import "./scss/main.scss";

gameInterface();
