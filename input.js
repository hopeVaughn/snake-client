// setup interface to handle user input from stdinlet connection;
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w' || key === 'W') {
    connection.write('Move: up');
    console.log('Move: up');
  }
  if (key === 's' || key === 'S') {
    connection.write('Move: down');
    console.log(`Move: down`);
  }
  if (key === 'a' || key === 'A') {
    connection.write('Move: left');
    console.log(`Move: left`);
  }
  if (key === 'd' || key === 'D') {
    connection.write('Move: right');
    console.log(`Move: right`);
  }

  if (key === 'x' || key === 'X') {
    connection.write('Say: eat my dust!');
  }
  if (key === 'z' || key === 'Z') {
    connection.write('Say: I R BESTEST!!');
  }
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
