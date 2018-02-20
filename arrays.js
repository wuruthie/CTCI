//1 Is Unique
//Takes a string and returns a boolean if all characters are unique
function isUnique(str) {
  var map = new Map();
  for (i = 0; i < str.length; i++) {
    if (map.get(str[i]) === undefined) {
      map.set(str[i], 1);
    } else {
      return false;
    }
  }
  return true;
}

//2 Check Permutation
//Assume white space and case sensitivity are important
//Takes two strings and returns a boolean if one is the permutation of the other
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var sortedStr1 = this.sortString(str1);
  var sortedStr2 = this.sortString(str2);

  for (i = 0; i < sortedStr1.length; i++) {
    if (sortedStr1[i] !== sortedStr2[i]) {
      return false;
    }
  }
  return true;
}

function sortString(str) {
  return str.split('').sort().join('');
}

//3 URLify
//Assume that the string has sufficient space at the end to hold the addtl. characters and that you're given the 'true' length of the string
//Takes a string and returns a modified string with '%20' instead of whitespace

function urlify(str) {
  return str.trim().replace(/ /g, '%20');
}


//4 Palindrome Permutation
//Given a string check if it is a permutation of a palindrome
//Takes a string and returns  a boolean if it is the permutation of a palindrome
function palindromePerm(str) {
  if (str.length < 2) {
    return true;
  }
  var cleanedStr = str.toLowerCase().replace(/\s/g, '');
  var stringMap = createStringMap(cleanedStr);
  var counts = stringMap.values();
  for (i = 0; i < counts.length; i++) {
    var oddCount = 0;
    if (oddCount > 1) {
      return false;
    }
    if (counts[i] % 2 !== 0) {
      oddCount++;
    }
  }
  return true;
}

function createStringMap(str) {
  var stringMap = new Map();
  for (i = 0; i < str.length; i++) {
    var curr = str[i];
    var mapVal = stringMap.get(curr);
    if (mapVal === undefined) {
      stringMap.set(curr, 1);
    } else {
      var count = mapVal;
      stringMap.set(curr, count++);
    }
  }
  return stringMap;
}

//5 One Away
//Give two strings, write a function to check if they are one edit or zero edits away
//Edit = insert, remove, or replace a character
//Take in string and gives boolean given number of edits

function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  if (str1.length === str2.length) {
    return sameLength(str1, str2);
  } else {
    return diffLength(str1, str2);
  }
}

function sameLength(str1, str2) {
  var diff = 0;
  for (i = 0; i < str1.length; i++) {
    if (diff > 1) {
      return false;
    }
    if (str1.charAt(i) !== str2.charAt(i)) {
      diff++;
    }
  }
  return true;
}


function longerString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
}

function shorterString(str1, str2) {
  if (str1.length < str2.length) {
    return str1;
  } else {
    return str2;
  }
}

function diffLength(str1, str2) {
  var diff = 0
  var shortIndex = 0;
  var longIndex = 0;
  var short = shorterString(str1, str2);
  var long = longerString(str1, str2);
  while (shortIndex != short.length) {
    if (diff > 1) {
      return false;
    }

    if (short.charAt(shortIndex) === long.charAt(longIndex)) {
      shortIndex++;
      longIndex++;
    } else {
      diff++;
      longIndex++;
    }
  }
  return true;
}

//6 String Compression
//Implement a basic method to perform basic string compression using the counts of repeated characters. For example, the string aabccccddd would become a2b1c4d3. If the compressed string is not smaller than the original string, your method should return the original string. Assume the string only has uppercase and lowercase letters (a-z).
//Input: String Output: String

function stringCompressor(str) {
  var count = 1;
  var compressed = [];
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i + 1)) {
      compressed.push(str.charAt(i));
      compressed.push(count.toString());
      count = 1;
    } else {
      count++;
    }
  }

  if (compressed.length > str.length) {
    return str;
  } else {
    return compressed.join('');
  }
}

//7 Rotate Matrix
//Given an image represented by an NxN matrix, where each pixel is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
function rotateMatrix(matrix) {
  var tmp;
  for (i = 0; i < )
}

var matrix = [
  [0, 0, 0],
  [1, 1, 1],
  [2, 2, 2]
];

var testMatrix = [
  [2, 1, 0],
  [2, 1, 0],
  [2, 1, 0]
];

var matrix2 = [
  [0, 0],
  [1, 1]
];

var testMatrix2 = [
  [1, 0],
  [1, 0]
];

var testOne = rotateMatrix(matrix) === testMatrix;
console.log('testOne', testOne);
var testTWo = rotateMatrix(matrix2) === testMatrix2;
console.log('testTwo', testTwo);

//8 Zero Matrix
//Write an algo such that if an element in a MxN matrix is zero, its entire row and column are set to zero
function zeroMatrix(matrix) {
  var indices = [];
  for (x = 0; x < matrix.length; x++) {
    for (y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === 0) {
        indices.push([x, y]);
      }
    }
  }
  return setZeroes(matrix, indices);
}

function setZeroes(matrix, indices) {
  for (i = 0; i < indices.length; i++) {
    var row = indices[i][0];
    var col = indices[i][1];
    for (x = 0; x < matrix[row].length; x++) {
      matrix[row][x] = 0;
    }
    for (y = 0; y < matrix[row].length; y++) {
      matrix[y][col] = 0;
    }
  }
  return matrix;
}

//9 String Rotation
//Assume you have a method isSubstring  which checks if one word is a substring of another. Given two strings s1 and s2, write code to check whether s2 is a rotation of s1 by using one call to isSubstring

function isSubstring(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var concatenated = [str1, str1].join('');
  return concatenated.includes(str2);
}

