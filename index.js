#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; // Dollar
let myPin = 5763;
console.log("\n***Welcome to Sasta Pay***");
// other line
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "\n\nEnter Your PIN: ",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct PIN Entered!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "\nPlease select an option:",
            type: "list",
            choices: ["Withdraw", "Quick Cash", "Check Balance", "Deposit"],
        },
    ]);
    // Withdrawn Feature:
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "\nEnter your amount: ",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        if (isNaN(amountAns.amount)) {
            console.log("Please enter a valid amount!");
        }
        else if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            console.log(`\n$${amountAns.amount} Withdrawn Successfully!`);
            console.log(`Remaining Balance: ${myBalance}`);
        }
    }
    // Quick Cash Feature:
    else if (operationAns.operation === "Quick Cash") {
        let quickCash = await inquirer.prompt([
            {
                name: "quick",
                message: "\nPlease select an option:",
                type: "list",
                choices: ["$1000", "$5000", "$10000", "$20000", "$50000"],
            },
        ]);
        // Deduct 1000
        if (quickCash.quick === "$1000") {
            myBalance -= 1000;
            if (quickCash.quick > myBalance) {
                console.log("Insufficient Balance");
                // console.log(`Available Balance: ${myBalance}`)
            }
            else {
                console.log(`\n${quickCash.quick} Withdrawn Successfully!`);
                console.log(`Remaining Balance: $${myBalance}`);
            }
        }
        // Deduct 5000
        if (quickCash.quick === "$5000") {
            myBalance -= 5000;
            if (quickCash.quick > myBalance) {
                console.log("Insufficient Balance");
                // console.log(`Available Balance: ${myBalance}`)
            }
            else {
                console.log(`\n${quickCash.quick} Withdrawn Successfully!`);
                console.log(`Remaining Balance: $${myBalance}`);
            }
        }
        // Deduct 10000
        if (quickCash.quick === "$10000") {
            myBalance -= 10000;
            if (quickCash.quick > myBalance) {
                console.log("Insufficient Balance");
                // console.log(`Available Balance: ${myBalance}`)
            }
            else {
                console.log(`\n${quickCash.quick} Withdrawn Successfully!`);
                console.log(`Remaining Balance: $${myBalance}`);
            }
        }
        // Deduct 20000
        if (quickCash.quick === "$20000") {
            myBalance -= 20000;
            if (quickCash.quick > myBalance) {
                console.log("Insufficient Balance");
                // console.log(`Available Balance: ${myBalance}`)
            }
            else {
                console.log(`\n${quickCash.quick} Withdrawn Successfully!`);
                console.log(`Remaining Balance: $${myBalance}`);
            }
        }
        // Deduct 50000
        if (quickCash.quick === "$50000") {
            myBalance -= 50000;
            if (quickCash.quick > myBalance) {
                console.log("Insufficient Balance");
                // console.log(`Available Balance: ${myBalance}`)
            }
            else {
                console.log(`\n${quickCash.quick} Withdrawn Successfully!`);
                console.log(`Remaining Balance: $${myBalance}`);
            }
        }
    }
    // Balance Checking Feature:
    else if (operationAns.operation === "Check Balance") {
        console.log(`\nCurrent Balance:  $${myBalance}`);
    }
    // Deposit Feature:
    else if (operationAns.operation === "Deposit") {
        let depositAns = await inquirer.prompt([
            {
                name: "deposit",
                message: "\nEnter your deposit: ",
                type: "number",
            },
        ]);
        myBalance += depositAns.deposit;
        if (isNaN(depositAns.deposit)) {
            console.log("Please enter a valid amount!");
        }
        else {
            console.log(`\n$${depositAns.deposit} Deposited Successfully!`);
            console.log(`Current Balance: $${myBalance}`);
        }
    }
    // continuation Feature:
    let continueUsing = await inquirer.prompt([
        {
            name: "continue",
            message: "\n\nDo you want to continue? (y/n): ",
            type: "string",
        },
    ]);
    if (continueUsing.continue === "y") {
        inquirer.prompt(operationAns.operation);
        // Loop function still needs to be added, along with the amount function which calculates all transactions until an exit is done
    }
    else {
        console.log("\n\nThank You for using Sasta Pay!");
    }
    // end of this feature
}
else {
    console.log("\nWrong PIN Entered!");
}
