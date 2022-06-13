const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end;
  });

  // conn.on('end', () => {
  //   console.log('You have been disconnected from the server');
  // })

  return conn;
};

console.log("Connecting ...");
connect();

