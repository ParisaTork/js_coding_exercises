/* eslint-disable max-len */
const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require('../challenges/exercise007');


describe('sumDigits', () => {
  test('returns sum of digits', () => {
    expect(sumDigits(12345)).toBe(15);
  });
});

describe('createRange', () => {
  test('returns correct range when valid arguments given', () => {
    expect(createRange(0, 15, 3)).toEqual([0, 3, 6, 9, 12, 15]);
  });

  test('returns correct range when start is negative number', () => {
    expect(createRange(-5, 5, 2)).toEqual([-5, -3, -1, 1, 3, 5]);
  });
});

const users = [
  {
    username: 'beth_1234',
    name: 'Beth Smith',
    screenTime: [
      {date: '2019-05-01', usage: {twitter: 34, instagram: 22, facebook: 40}},
      {date: '2019-05-02', usage: {twitter: 56, instagram: 40, facebook: 31}},
      {date: '2019-05-03', usage: {twitter: 12, instagram: 15, facebook: 19}},
      {date: '2019-05-04', usage: {twitter: 10, instagram: 56, facebook: 61}},
    ],
  },
  {
    username: 'sam_j_1989',
    name: 'Sam Jones',
    screenTime: [
      {date: '2019-06-11', usage: {mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10}},
      {date: '2019-06-13', usage: {mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16}},
      {date: '2019-06-14', usage: {mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31}},
    ],
  },
];

describe('getScreentimeAlertList', () => {
  test('throws error when no argument', () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow('users is required');
  });

  test('throws error when only one argument', () => {
    expect(() => {
      getScreentimeAlertList('users');
    }).toThrow('date is required');
  });

  test('returns username when screentime is greater than or equal to 100 mins', () => {
    expect(getScreentimeAlertList(users, '2019-05-04')).toEqual(['beth_1234']);
  });
});

describe('hexToRGB', () => {
  test('throws error when no argument', () => {
    expect(() => {
      hexToRGB();
    }).toThrow('hexStr is required');
  });

  test('returns RGB value', () => {
    expect(hexToRGB('#FFFFFF')).toEqual('RGB(255,255,255)');
    expect(hexToRGB('#FF0000')).toEqual('RGB(255,0,0)');
  });
});

const xWinsBoard = [
  ['X', '0', '0'],
  [null, 'X', '0'],
  [null, null, 'X'],
];

const zeroWinsBoard = [
  ['0', null, 'X'],
  [null, '0', 'X'],
  [null, 'X', '0'],
];

const noOneWinsBoard = [
  [null, '0', 'X'],
  ['X', '0', '0'],
  ['X', null, null],
];
describe('findWinner', () => {
  test('returns winner', () => {
    expect(findWinner(xWinsBoard)).toEqual('X');
    expect(findWinner(zeroWinsBoard)).toEqual('0');
  });

  test('returns null if no winner', () => {
    expect(findWinner(noOneWinsBoard)).toEqual(null);
  });
});
