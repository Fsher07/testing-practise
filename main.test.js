const { test, expect } = require('@jest/globals');
const stringLength = require('./main.js');

describe('stringLengtht', () => {
  test('returns the length of a string', () => {
    
    //Arrange
    let str = 'hello';

    //Act
    let result = stringLength(str);

    //Assert
    expect(result).toBe(5);
  });
});