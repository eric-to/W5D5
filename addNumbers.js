const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    reader.question("Type a num: ", function (numStr) {
      const thisNum = parseInt(numStr);

      sum += thisNum;
      console.log("Partial sum: " + sum);

      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    // completionCallback(sum);
    console.log('12' + 5);
    reader.close();
  }
}

// addNumbers(0, 5, function (sum) {
//   console.log("Total Sum: " + sum);
//   reader.close();
// });
addNumbers(0, 5, sum => {
  console.log("Total Sum: " + sum);
});
