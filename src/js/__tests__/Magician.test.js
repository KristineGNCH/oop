import Magician from '../Magician';

test('checking the creating of an instance Magician', () => {
  expect(new Magician('', 'Magician', 100, 1, 10, 40)).toEqual({
    name: '',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
