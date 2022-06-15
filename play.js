// client side server
const { connect } = require('./client');
const { setupInput } = require('./input');


console.log("Connecting ...");
const obj = connect();
setupInput(obj);
