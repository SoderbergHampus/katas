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

console.log('Should return 11: ', findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(
	'Should return 160: ',
	findOutlier([160, 3, 1719, 19, 11, 13, -21])
);
