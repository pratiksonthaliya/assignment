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
