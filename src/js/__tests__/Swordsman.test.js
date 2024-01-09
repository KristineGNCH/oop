import Swordsman from '../Swordsman';

test('checking the creating of an instance Swordsman', () => {
  expect(new Swordsman('', 'Swordsman', 100, 1, 40, 10)).toEqual({
    name: '',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
