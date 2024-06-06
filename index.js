const readline = require("readline");
const Game = require("./components/Game");
const Player = require("./components/Player");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("Enter details for Player 1:");
  const name1 = await askQuestion(" Name: ");
  const health1 = parseInt(await askQuestion(" Health: "));
  const strength1 = parseInt(await askQuestion(" Strength: "));
  const attack1 = parseInt(await askQuestion(" Attack: "));

  console.log("Enter details for Player 2:");
  const name2 = await askQuestion(" Name: ");
  const health2 = parseInt(await askQuestion(" Health: "));
  const strength2 = parseInt(await askQuestion(" Strength: "));
  const attack2 = parseInt(await askQuestion(" Attack: "));

  rl.close();

  const player1 = new Player(name1, health1, strength1, attack1);
  const player2 = new Player(name2, health2, strength2, attack2);

  const game = new Game(player1, player2);
  game.playGame();
}

main();

const Player = require("./Player");
// const Game = require('./Game');

// const input = [];
// process.stdin.on('data', function(data) {
//     input.push(data.toString().trim());
//     if (input.length === 8) {
//         const player1 = new Player(input[0], parseInt(input[1]), parseInt(input[2]), parseInt(input[3]));
//         const player2 = new Player(input[4], parseInt(input[5]), parseInt(input[6]), parseInt(input[7]));
//         const game = new Game(player1, player2);
//         game.playGame();
//         process.stdin.end();
//     }
// });

// console.log("Enter details for Player 1 (name, health, strength, attack):");
// console.log("Enter details for Player 2 (name, health, strength, attack):");
