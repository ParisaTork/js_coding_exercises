/* eslint-disable max-len */
const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
  } = require('../challenges/exercise006');
  
  describe('sumMultiples', () => {
    test('returns sum of any numbers which are multiples of 3 or 5', () => {
      expect(sumMultiples([3, 6, 9, 4, 8])).toBe(18);
    });
  });
  
  describe('isValidDNA', () => {
    test('returns false if str contains invalid DNA nucleobases', () => {
      expect(isValidDNA('ATJKMNO')).toBe(false);
    });
  
    test('returns true if str contains valid DNA nucleobases', () => {
      expect(isValidDNA('ACGTACACGTAC')).toBe(true);
    });
  });
  
  describe('getComplementaryDNA', () => {
    test('returns complimentary pairs if str contains valid DNA nucleobases', () => {
      expect(getComplementaryDNA('GTACCATG')).toBe('CATGGTAC');
    });
  });
  
  describe('isItPrime', () => {
    test('returns false if number is less than or equal to 1', () => {
      expect(isItPrime(1)).toBe(false);
      expect(isItPrime(-38)).toBe(false);
      expect(isItPrime(-55)).toBe(false);
      expect(isItPrime(-77)).toBe(false);
    });
  
    test('returns false if number is not prime', () => {
      expect(isItPrime(10)).toBe(false);
      expect(isItPrime(36)).toBe(false);
      expect(isItPrime(98)).toBe(false);
      expect(isItPrime(18907)).toBe(false);
    });
  
    test('returns true if number is prime', () => {
      expect(isItPrime(5)).toBe(true);
      expect(isItPrime(11)).toBe(true);
      expect(isItPrime(67)).toBe(true);
      expect(isItPrime(26783)).toBe(true);
    });
  });
  
  describe('createMatrix', () => {
    test('throws error if invalid argument', () => {
      expect(() => {
        createMatrix('string');
      }).toThrow('fill is required');
      expect(() => {
        createMatrix(9);
      }).toThrow('fill is required');
    });
  
    test('returns matrix if valid n and fill values', () => {
      expect(createMatrix(1, 'foo')).toEqual([['foo']]);
      expect(createMatrix(6, 'foobar')).toEqual([
        ['foobar', 'foobar', 'foobar', 'foobar', 'foobar', 'foobar'],
        ['foobar', 'foobar', 'foobar', 'foobar', 'foobar', 'foobar'],
        ['foobar', 'foobar', 'foobar', 'foobar', 'foobar', 'foobar'],
        ['foobar', 'foobar', 'foobar', 'foobar', 'foobar', 'foobar'],
        ['foobar', 'foobar', 'foobar', 'foobar', 'foobar', 'foobar'],
        ['foobar', 'foobar', 'foobar', 'foobar', 'foobar', 'foobar']]);
    });
  });
  
  
  const team = [
    {name: 'Richard', rota: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']},
    {name: 'Mary', rota: ['Monday', 'Tuesday', 'Wednesday', 'Saturday', 'Sunday']},
    {name: 'Frederick', rota: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']},
    {name: 'Sarah', rota: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']},
    {name: 'Mike', rota: ['Monday', 'Tuesday', 'Wednesday', 'Saturday', 'Sunday']},
    {name: 'Tom', rota: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']},
  ];
  
  describe('areWeCovered', () => {
    test('throws an error if no argument', () => {
      expect(() => {
        areWeCovered();
      }).toThrow('staff is required');
    });
  
    test('throws an error if only 1 argument', () => {
      expect(() => {
        areWeCovered(team);
      }).toThrow('day is required');
      expect(() => {
        areWeCovered('Monday');
      }).toThrow('day is required');
    });
  
    test('returns false if there are less than 3 staff members for the given day', () => {
      expect(areWeCovered(team, 'Friday')).toBe(false);
      expect(areWeCovered(team, 'Saturday')).toBe(false);
      expect(areWeCovered(team, 'Sunday')).toBe(false);
    });
  
    test('returns true if there are 3 or more staff members for the given day', () => {
      expect(areWeCovered(team, 'Monday')).toBe(true);
      expect(areWeCovered(team, 'Tuesday')).toBe(true);
      expect(areWeCovered(team, 'Wednesday')).toBe(true);
    });
  });
  