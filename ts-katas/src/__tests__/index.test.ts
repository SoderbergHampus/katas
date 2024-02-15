import {helloWorld, number} from '../index';

describe('Test should be able to test the functions in index', () => {
  it('Should return "Hello World"', () => {
    expect(helloWorld()).toEqual('Hello World');
  });
});

describe('Keep track of number of people on the bus', () => {
  it('Should return correct number of people', () => {
    expect(
      number([
        [10, 0],
        [3, 5],
        [5, 8],
      ])
    ).toEqual(5);
    expect(
      number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
      ])
    ).toEqual(17);
    expect(
      number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
      ])
    ).toEqual(21);
    expect(number([[0, 0]])).toEqual(0);
  });
});
