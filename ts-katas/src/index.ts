export const helloWorld = (): string => {
  return 'Hello World';
};

console.log(helloWorld());

/**
 * Function to keep track of the number of people on a bus. Must be >= 0.
 *
 * @param busStops Array of integer pairs, index 0 is people getting on and
 * index 1 are people getting off.
 */
export function number(busStops: [number, number][]): number {
  let sum = 0;
  busStops.map((pair) => pair[0] - pair[1]).forEach((ele) => (sum += ele));
  return sum;
}

console.log(
  '\nShould be 17: ',
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

/**
 * Highest scoring word, score is spot in alphabet
 */

export const highestScoringWord = (str: string): string => {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const words = str.split(' ');
  let leadingScore = 0;
  let highestScoringWord = '';
  for (let i in words) {
    let wordScore: number = words[i]
      .split('')
      .map((ele) => alphabet.indexOf(ele) + 1)
      .reduce((a, b) => a + b);

    if (wordScore > leadingScore) {
      highestScoringWord = words[i];
      leadingScore = wordScore;
    }
  }
  return highestScoringWord;
};

console.log(
  '\nShoule be "taxi":',
  highestScoringWord('man i need a taxi up to ubud')
);

/**
 * Count smileys
 */
const validateSmiley = (smiley: string): boolean => {
  let chars = smiley.split('');

  if (chars.length !== 2 && chars.length !== 3) {
    return false;
  }

  if (chars.length === 3 && !chars.some((ch) => ch === '~' || ch === '-')) {
    return false;
  }

  if (
    !(
      chars.some((ch) => ch === ':' || ch === ';') &&
      chars.some((ch) => ch === 'D' || ch === ')')
    )
  ) {
    return false;
  }
  return true;
};

export function countSmileys(arr: string[]): number {
  if (arr.length === 0) return 0;

  return arr.filter((smiley) => validateSmiley(smiley)).length;
}

console.log('\nShould be 3', countSmileys([';D', ':-(', ':-)', ';~)']));
