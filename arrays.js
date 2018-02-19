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
