import Undead from '../Undead';

test('checking the creating of an instance Undead', () => {
  expect(new Undead('', 'Undead', 100, 1, 25, 25)).toEqual({
    name: '21211',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
