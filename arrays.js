//1 Is Unique

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

