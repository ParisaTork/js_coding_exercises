const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error('nums is required');
  if (n === undefined) throw new Error('n is required');
  return nums[nums.length - 1] === n || nums.includes(n) === false ? null : nums[nums.findIndex((elem) => elem === n) + 1];
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error('str is required');
  let sum = 0;
  for (let i = 0, length = str.length; i < length; i++) {
    sum += Number(str[i]);
  } return {
    1: sum, 0: str.length - sum,
  };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error('n is required');
  return String(n).split('').reverse().join('') * 1;
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error('arrs is required');
  let sum = 0;
  arrs.forEach((elem) => {
    elem.forEach((key) => sum += key);
  });
  return sum;
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error('arr is required');
  if (arr.length < 2) {
    return arr;
  } else {
    const [firstElem, lastElem] = [arr[0], arr[arr.length - 1]];
    [arr[0], arr[arr.length - 1]] = [lastElem, firstElem];
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error('haystack is required');
  if (searchTerm === undefined) throw new Error('searchTerm is required');
  return JSON.stringify(haystack).toLowerCase().includes(searchTerm.toLowerCase())? true : false;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error('str is required');
  const [wordFrequencies, listOfWords] = [{}, str.toLowerCase().split(' ')];
  for (let i = 0; i < listOfWords.length; i++) {
    const word = listOfWords[i].toLowerCase().replace(/[,!?]/g, '').trim();
    if (wordFrequencies[word] === undefined) {
      wordFrequencies[word] = 1;
    } else {
      wordFrequencies[word] += 1;
    }
  }
  return wordFrequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
