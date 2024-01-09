import Daemon from '../Daemon';

test('checking the creating of an instance Daemon', () => {
  expect(new Daemon('', 'Daemon', 100, 1, 10, 40)).toEqual({
    name: '',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
