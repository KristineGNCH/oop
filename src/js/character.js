export default class Character {
  constructor(name, type, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = undefined;
    this.defence = undefined;

    const characters = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10 || !characters.includes(type)) {
      throw new Error('Error');
    }
  }
}
