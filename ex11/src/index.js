// Only change code below this line
function splitArrayInGroups(arr, n) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += n) {
      newArr.push(arr.slice(i, i+n));
  }
  return newArr;
}

// Only change code above this line

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
module.exports = splitArrayInGroups;
