class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  isAlive() {
    return this.health > 0;
  }

  attackDamage() {
    return this.attack * this.rollDice();
  }

  defendDamage() {
    return this.strength * this.rollDice();
  }

  takeDamage(damage) {
    this.health = Math.max(this.health - damage, 0);
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

module.exports = Player;
