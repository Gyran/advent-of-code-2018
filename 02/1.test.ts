import solve, { letterFrequency, parseInput } from './1';


test('letter frequncy', () => {
  const lf1 = letterFrequency('abcdef');
  expect(lf1).toHaveProperty('a', 1);
  expect(lf1).toHaveProperty('b', 1);
  expect(lf1).toHaveProperty('c', 1);
  expect(lf1).toHaveProperty('d', 1);
  expect(lf1).toHaveProperty('e', 1);
  expect(lf1).toHaveProperty('f', 1);

  const lf2 = letterFrequency('bababc');
  expect(lf2).toHaveProperty('a', 2);
  expect(lf2).toHaveProperty('b', 3);
  expect(lf2).toHaveProperty('c', 1);

  const lf3 = letterFrequency('abcdee');
  expect(lf3).toHaveProperty('a', 1);
  expect(lf3).toHaveProperty('b', 1);
  expect(lf3).toHaveProperty('c', 1);
  expect(lf3).toHaveProperty('d', 1);
  expect(lf3).toHaveProperty('e', 2);
});

test('solve', () => {
  const boxIds = [
    'abcdef',
    'bababc',
    'abbcde',
    'abcccd',
    'aabcdd',
    'abcdee',
    'ababab',
  ];

  expect(solve(boxIds)).toBe(12);
});

test('run it!', async () => {
  const input = await parseInput();

  const answer = solve(input);

  console.log('Answer', answer);
})
