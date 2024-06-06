const Game = require("../components/Game");
const Player = require("../components/Player");

test("Game creation and first turn", () => {
  const player1 = new Player("Player1", 50, 5, 10);
  const player2 = new Player("Player2", 100, 10, 5);
  const game = new Game(player1, player2);
  game.playTurn();
  expect(player1.isAlive() || player2.isAlive()).toBe(true);
});

test("Game play until game over", () => {
  const player1 = new Player("Player1", 50, 5, 10);
  const player2 = new Player("Player2", 100, 10, 5);
  const game = new Game(player1, player2);
  game.playGame();
  expect(player1.isAlive() || player2.isAlive()).toBe(true);
  expect(player1.isAlive() && player2.isAlive()).toBe(false);
});
