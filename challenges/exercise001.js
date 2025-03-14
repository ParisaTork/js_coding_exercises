function capitalize(word) {
  if (word === undefined) throw new Error('word is required');
  return word.substring(0, 1).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error('firstName is required');
  if (lastName === undefined) throw new Error('lastName is required');
  return firstName.substring(0,1).toUpperCase() + '.' + lastName.substring(0,1).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error('originalPrice is requied');
  if (vatRate === undefined) throw new Error('vatRate is required');
  const priceWithVAT = originalPrice + (originalPrice * vatRate / 100);
  return +priceWithVAT.toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (reduction === undefined) throw new Error('reduction is required');
  const salePrice = originalPrice * (1 - (reduction / 100));
  return +salePrice.toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error('str is required');
  let position; let length;
  (str.length % 2) === 0? (position = str.length / 2 - 1, length = 2) : (position = (str.length - 1) / 2, length = 1);
  return str.substring(position, position + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error('word is required');
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error('words is required');
  return words.map((word) => word.split('').reverse().join(''));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error('users is required');
  return users.filter((obj) => obj.type === 'Linux').length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error('scores is required');
  const meanScore = scores.reduce((a, b) => a + b) / scores.length;
  return +meanScore.toFixed(2);
}

// refactored post-feedback to make fizzbuzz more readable
function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error('n is required');
  if ((n % 3 === 0) && (n % 5 === 0)) {
    return 'fizzbuzz';
  }
  if (n % 3 === 0) {
    return 'fizz';
  }
  if (n % 5 === 0) {
    return 'buzz';
  }
  return n;
};

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
