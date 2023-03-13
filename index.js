// Code your solution in this file!
function distanceFromHqInBlocks(start, destination){
    debugger;
    const hq = 42;
    return Math.abs(someValue - hq);
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(start - destination) * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }
  
  function distanceFromHqInBlocks(someValue) {
    const hq = 42;
    return Math.abs(someValue - hq);
  }
  
  function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264;
    const hq = 42;
    const distanceInBlocks = Math.abs(someValue - hq);
    return distanceInBlocks * feetPerBlock;
  }
  
  