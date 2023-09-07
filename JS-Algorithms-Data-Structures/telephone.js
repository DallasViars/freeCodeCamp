/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

*/

// Original Solution
const regex1 = /^1?\d{10}$/;
const regex2 = /^1?\s?\d{3}(-?\s?)\d{3}(-?\s?)\d{4}$/;
const regex3 = /^1?\s?\(\d{3}\)(-?\s?)\d{3}(-?\s?)\d{4}$/;

const allRegex = [regex1, regex2, regex3];
function telephoneCheck(str) {
  for (let i = 0; i<allRegex.length; i++) {
    if (str.match(allRegex[i])) {
      return true;
    }
  }
  return false;
}

// Revised Solution
const regex1 = /^1?\d{10}$/;
const regex2 = /^1?\s?\d{3}(-?\s?)\d{3}(-?\s?)\d{4}$/;
const regex3 = /^1?\s?\(\d{3}\)(-?\s?)\d{3}(-?\s?)\d{4}$/;

const allRegex = [regex1, regex2, regex3];
function telephoneCheck(str) {
  return allRegex.some(regex => str.match(regex))
}