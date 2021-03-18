// Only change code below this line
function mySplice(arr1, arr2, n) {
  var myNewArr = [...arr2];
  var myInvArr = [];
  for (var i = 0; i < arr1.length; i++) {
    myInvArr[i] = arr1[arr1.length - 1 - i];
  }
    myNewArr.splice(n, 0, ...myInvArr);
  return myNewArr;
}
// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));

module.exports = mySplice;
