import {helloWorld} from '../index';

describe('Test should be able to test the functions in index', () => {
  it('Should return "Hello World"', () => {
    expect(helloWorld()).toEqual('Hello World');
  });
});
