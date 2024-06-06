const Player = require("../components/Player");
const Game = require("../components/Game");

describe("Player", () => {
  it("should initialize player with given attributes", () => {
    const player = new Player("Player A", 50, 5, 10);
    expect(player.name).toBe("Player A");
    expect(player.health).toBe(50);
    expect(player.strength).toBe(5);
    expect(player.attack).toBe(10);
  });

  it("should correctly calculate attack and defend damage", () => {
    const player = new Player("Player A", 50, 5, 10);
    const attackDamage = player.attackDamage();
    const defendDamage = player.defendDamage();
    expect(attackDamage).toBeGreaterThanOrEqual(10);
    expect(attackDamage).toBeLessThanOrEqual(60);
    expect(defendDamage).toBeGreaterThanOrEqual(5);
    expect(defendDamage).toBeLessThanOrEqual(30);
  });

  it("should take damage correctly", () => {
    const player = new Player("Player A", 50, 5, 10);
    player.takeDamage(20);
    expect(player.health).toBe(30);
    player.takeDamage(50);
    expect(player.health).toBe(0);
    player.takeDamage(70);
    expect(player.health).toBe(0);
  });
});

describe("Game", () => {
  it("should initialize game with two players", () => {
    const player1 = new Player("Player A", 50, 5, 10);
    const player2 = new Player("Player B", 100, 10, 5);
    const game = new Game(player1, player2);
    expect(game.player1).toBe(player1);
    expect(game.player2).toBe(player2);
  });

  it("should set current player correctly", () => {
    const player1 = new Player("Player A", 100, 5, 10);
    const player2 = new Player("Player B", 50, 10, 5);
    const game1 = new Game(player1, player2);
    expect(game1.currentPlayer).toBe(player2);
    player1.health = 30;
    console.log(player1);
    const game2 = new Game(player1, player2);
    expect(game2.currentPlayer).toBe(player1);
  });

  it("should correctly determine game over", () => {
    const player1 = new Player("Player A", 50, 5, 10);
    const player2 = new Player("Player B", 0, 10, 5);
    const game = new Game(player1, player2);
    expect(game.isGameOver()).toBe(true);
  });

  it("should play a turn and update health", () => {
    const player1 = new Player("Player A", 50, 5, 10);
    const player2 = new Player("Player B", 100, 1, 5);
    const game = new Game(player1, player2);
    game.playTurn();
    expect(player2.health).toBeLessThan(100);
  });

  it("should determine the winner correctly", () => {
    const player1 = new Player("Player A", 10, 5, 10);
    const player2 = new Player("Player B", 500, 100, 100);
    const game = new Game(player1, player2);
    game.playGame();
    expect(player2.winner).toBe(true);
  });
});
