// prompts the user to input basic salary and benefits.
const prompt = require("prompt-sync")({ sigint: true });
let basicSalary = parseFloat(prompt("Please enter the basic salary:"));
let benefits = prompt("Please enter your benefits")

// Function to calculate the payee
function calculatePayee(taxablepay) {
    let payee;
    if (taxablepay <= 24000) {
        payee = (taxablepay * 0.1)
    } else if (taxablepay <= 32333) {
        payee = (taxablepay * 0.25)
    } else if (taxablepay <= 500000) {
        payee = (taxablepay * 0.3)
    } else if (taxablepay <= 800000) {
        payee = (taxablepay * 0.325)
    } else {
        payee = (taxablepay * 0.35)
    }
    return payee
}
    
    // Function to calculate NHIF deductions
    function calculateNHIFDeductions(grossSalary) {
      let nhifDeduction;
      if (grossSalary >= 100000) {
        nhifDeduction = 1700;
      } else if (grossSalary >= 90000) {
        nhifdeduction = 1600;
      } else if (grosssalary >= 80000) {
        nhifdeduction = 1500;
      } else if (grossSalary >= 70000) {
        nhifdeduction = 1400;
      } else if (grossSalary >= 60000) {
        nhifdeduction =1300;
      } else if (grossSalary>= 50000) {
        nhifdeduction =1200;
      } else if (grossSalary >= 45000) {
        nhifdeduction = 1100;
      } else if (grossSalary>= 40000) {
        nhifdeduction = 1000;
      } else if (grossSalary >= 35000) {
        nhifdeduction =950;
      } else if (grossSalary >= 30000) {
        nhifdeduction =900;
      } else if (grossSalary >= 25000) {
        nhifdeduction = 850;
      } else if (grossSalary >= 20000) {
        nhifdeduction = 750;
      } else if (grosssalary >= 15000){
        nhifdeduction = 600;
      } else if (grossSalary >= 12000) {
        nhifdeduction = 500;
      } else if (grossSalary >= 8000) {
        nhifdeduction = 400;
      } else if (grossSalary >= 6000) {
        nhifdeduction = 300;
      } else {
        nhifdeduction = 150;
      }
      return nhifdeduction;
    }

    // Function to calculate NSSF deductions
    function calculateNSSFdeductions(grossSalary) {
      return Math.min(0.06 * grossSalary, 200);
    }
    
    // Function to calculate Net Salary
    function calculateNetSalary(basicSalary, benefits) {
      let grossSalary = basicSalary + benefits;
      let payee = calculatePayee(grossSalary);
      let nhifDeductions = calculateNHIFDeductions(grossSalary);
      let nssfDeductions = calculateNSSFdeductions(grossSalary);
      let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
      return netSalary;
    }
    
    // Calculate and display net salary
    let netSalary = calculateNetSalary(basicSalary, benefits);
    console.log("Net Salary: KES", netSalary);
    
    
