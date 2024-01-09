import Character from '../character';

test('checking the creating of an instance', () => {
  expect(new Character('', 'Magician', 100, 1)).toEqual({
    name: '',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});

test('throwing an error in case of non string value entered', () => {
  expect(() => new Character(1, 'Magician', 100, 1)).toThrow();
});

test('throwing an error in case of name is shorter than 2 characters', () => {
  expect(() => new Character('a', 'Magician', 100, 1)).toThrow();
});

test('throwing an error in case of name is longer than 10 characters', () => {
  expect(() => new Character('SuperMegaHero', 'Magician', 100, 1)).toThrow();
});

test('throwing an error in case of non existed character type entered', () => {
  expect(() => new Character('MegaHero', 'Spider', 100, 1)).toThrow();
});
