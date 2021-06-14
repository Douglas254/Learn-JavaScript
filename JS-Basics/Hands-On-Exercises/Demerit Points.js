// Write a program where a function takes a parameter speed of a car,if the car is driving
// under the speed limit we get the (OK) message on the console and for every 5km for
// above speed limit you get the 1 point like when driving 75km/hr and 80km/hr you get
// 2points and 180km/hr the license gets suspended i.e when you get more than 12 points.

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoints = 5;

  if (speed < speedLimit + kmPerPoints) {
    console.log("The speed is OK");
    return;
  }

  const points = Math.floor(speed - speedLimit) / kmPerPoints;
  if (points >= 12) console.log("license Expired");
  else console.log("points", points);
}

checkSpeed(130);
