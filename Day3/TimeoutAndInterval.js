console.log("Before timeout");

setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("After timeout");

//setInterval function
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId); // Stops the interval after 5 iterations
    console.log("Interval cleared");
  }
}, 1000); // 1000 milliseconds = 1 second

console.log("After interval");