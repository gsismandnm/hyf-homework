const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function getArrivalTime() {
    const approxTime = travelInformation.destinationDistance / travelInformation.speed;
    let hours = Math.floor(approxTime);
    let minutes = Math.floor((approxTime % 1) * 60);

    return `Your travel time is ${hours} hours and ${minutes} minutes.`
}

const travelTime = getArrivalTime(travelInformation);

console.log((travelTime)); // The result = 8 hours and 38 minutes


getArrivalTime();