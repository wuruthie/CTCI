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