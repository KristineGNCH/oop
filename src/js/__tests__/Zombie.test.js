import Zombie from '../Zombie';

test('checking the creating of an instance Zombie', () => {
  expect(new Zombie('', 'Zombie', 100, 1, 40, 10)).toEqual({
    name: '212',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
