/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

*/

//Original Solution
function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  let coded = str.split("");
  let codedArr = [];
  let regex = /\W/ig;
  for (let i=0; i<coded.length; i++) {
    for (let j=0; j<coded[i].length; j++) {
      let tempChar = coded[i][j];
      if (!cipher[alphabet.indexOf(tempChar)]) {
        codedArr.push(tempChar);
      } else {
        let replChar = cipher[alphabet.indexOf(tempChar)];
        codedArr.push(replChar);
      }
    }
  }
  return codedArr.join("");
}

//Revised Solution
function rot13(str, offset=13) {
  const codedArr = [];
  const A = 64;
  const Z = 90;
  for (let letter of str.split("")) {
    const charCode = letter.charCodeAt(0);
    let newCharCode;
    if (charCode <= A || charCode > Z) {
      newCharCode = charCode;
    } else {
      if (charCode + offset > Z) {
        newCharCode = ((charCode + offset) - Z) + A
      } else {
        newCharCode = charCode + offset
      }
    }
    codedArr.push(String.fromCharCode(newCharCode));
  }
  return codedArr.join("");
}