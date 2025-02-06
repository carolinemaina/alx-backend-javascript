const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Rounds and adds two numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('Round a number and decimal', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('Round and add two decimals', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('Round and add two decimals', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
