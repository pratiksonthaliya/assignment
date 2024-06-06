const Player = require("../components/Player");

test("Player creation", () => {
  const player = new Player("Test", 100, 10, 20);
  expect(player.name).toBe("Test");
  expect(player.health).toBe(100);
  expect(player.strength).toBe(10);
  expect(player.attack).toBe(20);
});

test("Player is alive", () => {
  const player = new Player("Test", 100, 10, 20);
  expect(player.isAlive()).toBe(true);
  player.health = 0;
  expect(player.isAlive()).toBe(false);
});

test("Player takes damage", () => {
  const player = new Player("Test", 100, 10, 20);
  player.takeDamage(30);
  expect(player.health).toBe(70);
});

test("Player attack and defend damage", () => {
  const player = new Player("Test", 100, 10, 20);
  const attackDamage = player.attackDamage();
  const defendDamage = player.defendDamage();
  expect(attackDamage).toBeGreaterThanOrEqual(20);
  expect(attackDamage).toBeLessThanOrEqual(120);
  expect(defendDamage).toBeGreaterThanOrEqual(10);
  expect(defendDamage).toBeLessThanOrEqual(60);
});
