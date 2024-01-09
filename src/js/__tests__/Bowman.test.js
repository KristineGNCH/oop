import Bowman from '../Bowman';

test('checking the creating of an instance Bowman', () => {
  expect(new Bowman('', 'Bowman', 100, 1, 25, 25)).toEqual({
    name: '',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
