/* eslint-disable max-len */
function getSquares(nums) {
  if (nums === undefined) throw new Error('nums is required');
  return nums.map((num) => Math.pow(num, 2));
}

// refactored post-feedback to not use libraries
function camelCaseWords(words) {
  if (words === undefined) throw new Error('words is required');
  words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  words[0] = words[0].toLowerCase();
  return words.join('');
}

// refactored post-feedback to not use libraries
function getTotalSubjects(people) {
  if (people === undefined) throw new Error('people is required');
  const subjectsPerPerson = people.map((person) => person.subjects.length);
  return subjectsPerPerson.reduce((a, b) => a + b);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');
  return menu.some((i) => i.ingredients.includes(ingredient));
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error('arr1 is required');
  if (arr2 === undefined) throw new Error('arr2 is required');
  const arr = arr1.filter(i => arr2.includes(i));
  return [...new Set(arr)].sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
