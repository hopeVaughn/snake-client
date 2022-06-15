# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here.

## Final Product

!["running client side"](./clientSnake.png)
!["running server"](./serverStart.png)
!["Server running"](./serverSnek.png)
!["client connected"](./loggedin.png)

## Getting Started

- Follow steps inside the snek server repo to run the server side
- snek server repo can be found at `https://github.com/taniarascia/snek`
- Run the development snake client using the `node play.js` command.

## Included Files

- client.js `creates a connection from the client-side application to the server hosting the game`
- input.js `handles all input from client-side key board commands including cute hot-keyed shout outs`
- constants.js `deconstructs IP and PORT information and key bind map. Exports it to the client.js`
- play.js `main node file ran to interface with the snek game server.`
