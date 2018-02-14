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