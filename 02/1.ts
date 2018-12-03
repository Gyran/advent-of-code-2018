import { readFile } from '../util';

export const letterFrequency = (word: string) => {
  const frequencyMap:any = {};

  for (const letter of word) {
    if (!frequencyMap[letter]) {
      frequencyMap[letter] = 0;
    }

    frequencyMap[letter] += 1;
  }

  return frequencyMap;
};

export const calculateChecksum = (boxIds: Array<string>) => {
  const map:any = {};

  boxIds.forEach((boxId) => {
    const lf = letterFrequency(boxId);

    const innerMap:any = {};

    for (const letter in lf) {
      const h = lf[letter];

      innerMap[h] = true;
    }

    for (const h in innerMap) {
      if (h) {
        if (!map[h]) {
          map[h] = 0;
        }

        map[h] += 1;
      }
    }
  });

  return map[2] * map[3];
};

export const parseInput = async (): Promise<string[]> => {
  const input = await readFile(`${ __dirname }/1.input`);

  return input.split('\n').filter((n) => !!n);
}

export default calculateChecksum;
