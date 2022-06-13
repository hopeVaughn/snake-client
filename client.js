const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //event listener for client upon connecting to game server.
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })
  //applys our name to the board
  conn.on('connect', () => {
    conn.write('Name: HVW')
  })

  //output server data client side event listen 
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end;
  });

  return conn;
};

module.exports = {
  connect,
}