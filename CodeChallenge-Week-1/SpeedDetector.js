//prompts the user to input the speed of the car 
const prompt = require("prompt-sync")({ sigint: true });
const speed = prompt("Please enter he speed of the car")
const speedLimit = 70
let demeritPoints = 0

//calculates the demerit points
function calculatedemeritPoints(speed) {
    
    if (speed <= speedLimit) {
        return "OK";
    } else {
        demeritPoints = Math.floor((speed - speedLimit)/5)
        return demeritPoints;
    }
}
// Call the function with the speed parameter
const points = calculatedemeritPoints(parseInt(speed, 10));
    
// checks whether the demerit points are more than 12
    if (demeritPoints > 12) {
        console.log ("License suspended");  
    } else {
        console.log("Demerit points: " + demeritPoints);
    }
    
   

    

