/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

*/

function palindrome(str) {
  let regex = /[a-z0-9]/g;
  let parsed = str.toLowerCase().match(regex).join("");
  let reversed = [];
  for (let i=parsed.length; i>0; i--) {
    reversed.push(parsed[i-1]);
  }
  reversed = reversed.join("");
  if (parsed === reversed) {
    return true;
  }
  return false;
}