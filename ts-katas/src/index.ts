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

console.log(
	'Should return "Thi1s is2 3a T4est": ',
	order('is2 Thi1s T4est 3a')
);
console.log(
	'Should return "Fo1r the2 g3ood 4of th5e pe6ople": ',
	order('4of Fo1r pe6ople g3ood th5e the2')
);
