const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should return fizz when number is divisible by 3, buzz when divisible by 5, and fizz-buzz when divisible by both 3 and 5 and otherwise return the number', function() {
		const normalCases = [
		{num: 3, expected: 'fizz'},
		{num: 5, expected: 'buzz'},
		{num: 15, expected: 'fizz-buzz'},
		{num: 7, expected: 7}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('should raise error if args not numbers', function() {
		const badInputs = [
		['a'],
		[false]
		];

		badInputs.forEach(function(input) {
			(function() {
				fizzBuzzer(input[0])
			}).should.throw(Error);
		});
	});
});