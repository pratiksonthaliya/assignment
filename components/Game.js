const Player = require("./Player");

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer =
      this.player1.health < this.player2.health ? this.player1 : this.player2;
  }

  playTurn() {
    const attacker = this.currentPlayer;
    const defender =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;

    const attackDamage = attacker.attackDamage();
    const defendDamage = defender.defendDamage();
    const damage = Math.max(attackDamage - defendDamage, 0);

    defender.takeDamage(damage);

    console.log(
      `${attacker.name} attacks! Rolls ${attackDamage}. ${defender.name} defends! Rolls ${defendDamage}. Damage dealt: ${damage}. ${defender.name} health: ${defender.health}`
    );

    this.currentPlayer = defender;
  }

  isGameOver() {
    if (!this.player1.isAlive()) {
      this.player2.winner = true;
      return true;
    }
    if (!this.player2.isAlive()) {
      console.log("hi");
      this.player1.winner = true;
      return true;
    }
    return false;
  }

  playGame() {
    console.log(`\nGame begins: `);
    while (!this.isGameOver()) {
      this.playTurn();
    }

    const winner = this.player1.winner ? this.player1 : this.player2;
    console.log(`${winner.name} wins the game!`);
  }
}

module.exports = Game;
