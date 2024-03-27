//prompts the user to input students marks  
const prompt = require("prompt-sync")({ sigint: true });

// Function to calculate Grades according to marks scored (A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.) 
function calculategrade(marks) {
    if (marks > 79) {
      return "A";  
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 49) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}
console.log(prompt);
let marks = prompt("Pleaseinputstudentmarks(0-100)")
if (marks < 0 || marks > 100) {
    console.log("Invalid input. Marks should be between 0 and 100.");
}
let grade = calculategrade(marks)

console.log(grade)


