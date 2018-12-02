import solve, { parseInput } from '.';

test('solve', () => {
  expect(solve([1 , 1, 1])).toEqual(3);
  expect(solve([1 , 1, -2])).toEqual(0);
  expect(solve([-1 , -2, -3])).toEqual(-6);
});


test('run it!', () => {
  const input = parseInput();
  const answer = solve(input);

  console.log('answer:', answer);
})

