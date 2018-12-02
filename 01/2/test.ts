import solve, { parseInput } from '.';

test('solve', () => {
  expect(solve([1, -1])).toEqual(0);
  expect(solve([3, 3, 4, -2, -4])).toEqual(10);
  expect(solve([-6, 3, 8, 5, -6])).toEqual(5);
  expect(solve([7, 7, -2, -7, -4])).toEqual(14);
});


test('run it!', async () => {
  const input = await parseInput();
  const answer = solve(input);

  console.log('Answer', answer);
})

