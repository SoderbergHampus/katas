export function findOutlierOld(integers: number[]): number {
	const odds = integers.filter((num) => num % 2 !== 0);
	if (odds.length === 1) return odds[0];
	const evens = integers.filter((num) => num % 2 === 0);
	return evens[0];
}

export function findOutlier(integers: number[]): number {
	if (integers.slice(0, 3).filter((num) => num % 2 === 0).length > 1) {
		return integers.find((num) => num % 2 !== 0) || 0;
	}

	return integers.find((num) => num % 2 === 0) || 0;
}

export function order(words: string): string {
	if (words.length === 0) return '';
	return words
		.split(' ')
		.sort((a, b) => +a.match(/\d/)! - +b.match(/\d/)!)
		.join(' ');
}

export function longestConsec(strarr: string[], k: number): string {
	const arr = [];
	let maxLength = 0;
	for (let i = 0; i < strarr.length; i++) {
		let counter = 0;
		let word = '';

		while (counter < k && k + i <= strarr.length) {
			word += strarr[i + counter];
			counter++;
		}
		if (word.length > 0) arr.push(word);
		if (word.length > maxLength) maxLength = word.length;
	}
	return arr.find((a) => a.length === maxLength)!;
}

const makeUnique = (value: unknown, index: number, arr: unknown[]) => {
	return arr.indexOf(value) === index;
};
export const scramble = (str1: string, str2: string): boolean => {
	const sharedLetters1 = str1.split('').filter((ch) => str2.includes(ch));
	const sharedLetters2 = str2.split('').filter((ch) => str1.includes(ch));
	console.log('\n', sharedLetters1, '\n', sharedLetters2);

	return (
		str2.length === sharedLetters2.length &&
		sharedLetters1.length >= sharedLetters2.length
	);
};

console.log('should return true: ', scramble('rkqodlw', 'world'));
console.log('should return true: ', scramble('cedewaraaossoqqyt', 'codewars'));
console.log('should return false: ', scramble('katas', 'steak'));
console.log('Should be false. ', scramble('scriptjavx', 'javascript'));
console.log('Should be false. ', scramble('javscripts', 'javascript'));
