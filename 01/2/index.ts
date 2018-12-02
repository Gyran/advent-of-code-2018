import { readFile } from '../../util';

export const duplicatedFrequency = (sequence: number[]): number => {
  let i = 0;
  let frequency = 0;
  const foundFrequencies = new Set([frequency]);

  while(true) {
    frequency = frequency + sequence[i];

    if (foundFrequencies.has(frequency)) {
      break;
    }

    foundFrequencies.add(frequency);

    i = (i + 1) % (sequence.length);
  }

  return frequency;
}

export const parseInput = async (): Promise<number[]> => {
  const input = await readFile(`${ __dirname }/input`);

  return input.split('\n').map((line) => parseInt(line, 10)).filter((n) => !Number.isNaN(n));
}

export default duplicatedFrequency;
