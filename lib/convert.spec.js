const { convertArrayToString } = require('./convert.js');

describe('when calling convertArrayToString', () => {
  const cases = [
    { array: [1, 2, 3, 4, 5, 6, 7, 8], expected: '1-8' },
    { array: [1, 3, 4, 5, 6, 7, 8], expected: '1,3-8' },
    { array: [1, 3, 4, 5, 6, 7, 8, 10, 11, 12], expected: '1,3-8,10-12' },
    { array: [1, 2, 3], expected: '1-3' },
    { array: [1, 2], expected: '1,2' },
    { array: [1, 2, 4], expected: '1,2,4' },
    { array: [1, 2, 4, 5, 6], expected: '1,2,4-6' },
    {
      array: [1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21],
      expected: '1-3,7-9,15,17,19-21',
    },
    {
      array: [1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002],
      expected: '1-6,100,1091,1999-2002',
    },
    { array: [1], expected: '1' },
    { array: [1, 3, 5, 7, 9, 11], expected: '1,3,5,7,9,11' },
  ];

  it('expect to return a string', async () => {
    await Promise.all(cases.map(async ({ array, expected }) => {
      await expect(convertArrayToString(array)).resolves.toEqual(expected);
    }));
  });
});
