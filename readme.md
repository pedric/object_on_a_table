# Object on a table

A JavaScript console application for putting an object at a surface and navigate with the keys.

## Run app

The repo includes a build, the app can be tested by opening <code>./dist/index.html</code>in your browser.<br/>
Start development with <code>npm run start</code>, then run <code>npm run build</code> when done.

## Instructions and assumptions made:

The program only reads digits from 0-9 directly on keypress.<br/>
instead of letting the user type 2 or more and read it on submit.<br/>
The simulation quits instantly if the object falls off the table.<br/>
Make sure you focus the browser window since the eventlisteners for
input is attached to the window object.
typing in the console wont work.
