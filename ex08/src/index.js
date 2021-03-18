// Only change code below this line
function myMutation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
    var slovoDrStr = arr[1].charAt(i);
    var slovoPostoji = false;
    for (var j = 0; j < arr[0].length; j++) {
      var slovoPrStr = arr[0].charAt(j);

      if (slovoPrStr.toLowerCase() == slovoDrStr.toLowerCase()) {
        slovoPostoji = true;
      }
    }
    if (slovoPostoji == false) {
      return false;
    }
  }
  return true;
}

// Only change code above this line
//myMutation(["hello", "hey"]);
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;
