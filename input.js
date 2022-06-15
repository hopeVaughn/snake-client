// setup interface to handle user input from stdinlet connection;
const { keyBinds } = require('./constants');
let connection;

const handleUserInput = function(key) {
  // escape command to exit the program
  if (key === '\u0003') {
    process.exit();
  }

  // movement keys and edge cases from constants.js map
  if (!keyBinds[key]) {
    return console.log(`Invalid entry`);
  }
  connection.write(keyBinds[key]);
  console.log(keyBinds[key]);

};


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
};

module.exports = {
  setupInput,
};
