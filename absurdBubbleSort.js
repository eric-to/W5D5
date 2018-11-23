const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const absurdBubbleSort = function(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      return innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      return sortCompletionCallback(arr);
    }
  }
};

const askIfGreaterThan = function(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? : `, function (userAnswer) {
    if (userAnswer === "yes") {
      callback(true);
    } else if (userAnswer === "no") {
      callback(false);
    } else {
      console.log('Not a valid answer; must be true or false');
      askIfGreaterThan(el1, el2, callback);
    }
  });
};

const innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == (arr.length) - 1) {
    console.log(arr);
    return outerBubbleSortLoop(madeAnySwaps);
  }

  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        madeAnySwaps = true;
        return innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        return innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  }
};

// askIfGreaterThan(6, 5, userInput => console.log(`this is ${userInput}`));
// reader.close();

// innerBubbleSortLoop([3, 5, 11, 4, 9, 10, 1], 0, false, function(r) {
//   console.log('In outer bubble sort!');
//   reader.close();
// });

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
