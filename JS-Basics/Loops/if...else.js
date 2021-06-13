// Exercise
// if hour is between 6am and 12pm: Good morning!!
// if it is between 12pm and 6pm: Good afternoon!!
// Otherwise: Good evening

let hour = 10;

if (hour >= 6 && hour <= 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening");
}

// you can write the code without the curl braces still works without noise in the code
let hour = 1;

if (hour >= 6 && hour <= 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening");
