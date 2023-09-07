/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

*/

function thousands(num, strNum, converted="") {
  let numChar = strNum[strNum.length-4];
  if (numChar >= 4) {
    converted += "Roman Numerals only go up to 3999, but the best guess answer is: ";
  }
    for (let i=0; i < numChar; i++) {
      converted += "M";
    }
  return hundreds(num, strNum, converted);
}

function hundreds(num, strNum, converted="") {
  let numChar = strNum[strNum.length-3];
  if (numChar === "9") {
    converted += "CM";
  } else if (numChar === "4") {
    converted += "CD";
  } else if (numChar >= 5) {
    converted += "D";
    for (let i=0; i < numChar-5; i++) {
      converted += "C";
    }
  } else {
    for (let i=0; i < numChar; i++) {
      converted += "C";
    }
  }
  return tens(num, strNum, converted);
}

function tens(num, strNum, converted="") {
  let numChar = strNum[strNum.length-2];
  if (numChar === "9") {
    converted += "XC";
  } else if (numChar === "4") {
    converted += "XL";
  } else if (numChar >= 5) {
    converted += "L";
    for (let i=0; i < numChar-5; i++) {
      converted += "X";
    }
  } else {
    for (let i=0; i < numChar; i++) {
      converted += "X";
    }
  }
  return ones(num, strNum, converted);
}

function ones(num, strNum, converted="") {
  let numChar = strNum[strNum.length-1];
  if (numChar === "9") {
    converted += "IX";
  } else if (numChar === "4") {
    converted += "IV";
  } else if (numChar >= 5 ) {
    converted += "V"
    for (let i=0; i < numChar-5; i++) {
      converted += "I";
    }
  } else {
    for (let i=0; i < numChar; i++)
    converted += "I";
  }
 return converted;
}

function convertToRoman(num) {
  let strNum = num.toString();
  if (num >= 1000) {
    num = num.toString();
    return thousands(num, strNum);
  } else if (num >= 100) {
    num = num.toString();
    return hundreds(num, strNum);
  } else if (num >= 10) {
    num = num.toString();
    return tens(num, strNum);
  } else {
    num = num.toString();
    return ones(num, strNum);
  }
}

/*
I - 1       IV  - 4
V - 5       IX  - 9
X - 10      XL  - 40
L - 50      XC  - 90
C - 100     CD  - 400
D - 500     CM  - 900
M - 1000      
*/