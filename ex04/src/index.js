// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
//End of monitorsListArray array

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  // Only change code below this line
  var monitorsList = [];
  for (var i = 0; i <= 2; i++) {
    monitorsList[i] = [newMonitorsList[i], i + 1];
  }
  return monitorsList;
  // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
