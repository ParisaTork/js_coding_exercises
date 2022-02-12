function getSquares(nums) {
  if (nums === undefined) throw new Error('nums is required');
  return nums.map((num) => Math.pow(num, 2));
}

// need to refactor
function camelCaseWords(words) {
  if (words === undefined) throw new Error('words is required');
  const camelCase = require('camelcase');
  return camelCase(words);
}

// need to refactor
function getTotalSubjects(people) {
  if (people === undefined) throw new Error('people is required');
  const lodash = require('lodash');
  const subjectsPerPerson = people.map((person) => person.subjects.length);
  return lodash.sum(subjectsPerPerson);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');
  return menu.some((i) => i.ingredients.includes(ingredient));
}

// need to refactor
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
