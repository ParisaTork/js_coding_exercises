function findSmallNums(nums) {
  if (!nums) throw new Error('nums is required');
  return nums.filter((num) => num < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error('names is required');
  if (!char) throw new Error('char is required');
  return names.filter((name) => name.substring(0, 1) === char);
}

function findVerbs(words) {
  if (!words) throw new Error('words is required');
  return words.filter((word) => word.includes('to '));
}

function getIntegers(nums) {
  if (!nums) throw new Error('nums is required');
  return nums.filter((num) => Number.isInteger(num));
}

// need to refactor
function getCities(users) {
  if (!users) throw new Error('users is required');
  const cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error('nums is required');
  const squareRoots = nums.map((num) => Math.sqrt(num).toFixed(2));
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error('sentences is required');
  if (!str) throw new Error('str is required');
  return sentences.filter((word) => word.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error('triangles is required');
  return triangles.map((triangle) => Math.max(...triangle));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
