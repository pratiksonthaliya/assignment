import { expect } from "chai";
import Player from "../components/Player";
import Game from "../components/Game";

// const Player = require("../components/Player");
// const Game = require("../components/Game");
// const { expect } = require("chai");

describe("Player", () => {
  it("should initialize player with given attributes", () => {
    const player = new Player("Player A", 50, 5, 10);
    expect(player.name).to.equal("Player A");
    expect(player.health).to.equal(50);
    expect(player.strength).to.equal(5);
    expect(player.attack).to.equal(10);
  });

  it("should correctly calculate attack and defend damage", () => {
    const player = new Player("Player A", 50, 5, 10);
    const attackDamage = player.attackDamage();
    const defendDamage = player.defendDamage();
    expect(attackDamage).to.be.within(10, 60);
    expect(defendDamage).to.be.within(5, 30);
  });

  it("should take damage correctly", () => {
    const player = new Player("Player A", 50, 5, 10);
    player.takeDamage(20);
    expect(player.health).to.equal(30);
    player.takeDamage(50);
    expect(player.health).to.equal(0);
  });
});

describe("Game", () => {
  it("should initialize game with two players", () => {
    const player1 = new Player("Player A", 50, 5, 10);
    const player2 = new Player("Player B", 100, 10, 5);
    const game = new Game(player1, player2);
    expect(game.player1).to.equal(player1);
    expect(game.player2).to.equal(player2);
  });

  it("should correctly determine game over", () => {
    const player1 = new Player("Player A", 50, 5, 10);
    const player2 = new Player("Player B", 0, 10, 5);
    const game = new Game(player1, player2);
    expect(game.isGameOver()).to.be.true;
  });

  it("should play a turn and update health", () => {
    const player1 = new Player("Player A", 50, 5, 10);
    const player2 = new Player("Player B", 100, 10, 5);
    const game = new Game(player1, player2);
    game.playTurn();
    expect(player1.health).to.be.below(50).or(player2.health).to.be.below(100);
  });
});
