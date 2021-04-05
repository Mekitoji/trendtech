/**
 * Converting array of numbers to string
 *
 * @param {number[]} intArray array of int numbers
 * @returns {Promise<string>} Promise object represent a string
 */
const convertArrayToString = (intArray) => {
  return new Promise((resolve) => {
    const result = []
    const range = {
      prev: null,
      next: null,
    };
    let tmp;
  
    for (let i = 0; i <= intArray.length; i++) {
      const cur = intArray[i]
      if (!range.prev) {
        range.prev = cur;
      } else if (cur - tmp === 1) {
        range.next = cur;
      } else {
        if (range.prev !== null && range.next !== null) {
          if (range.next - range.prev === 1) {
            result.push(range.prev, range.next);
          } else {
            result.push(`${range.prev}-${range.next}`);
          }
          range.next = null;
        } else {
          result.push(range.prev);
        }
        range.prev = cur;
      }
      tmp = cur;
    }

    resolve(result.join(','));
  });
}

module.exports = {
  convertArrayToString,
}
