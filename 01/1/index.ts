import fs from 'fs';

export const finalFrequency = (sequence: number[]): number => {
  return sequence.reduce((sum, n) => sum + n, 0);
}

export const parseInput = (): number[] => {
  const input = fs.readFileSync(`${ __dirname }/input`).toString();

  return input.split('\n').map((line) => parseInt(line, 10)).filter((n) => !Number.isNaN(n));
}

export default finalFrequency;
