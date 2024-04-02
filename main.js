#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 15000;
let myPin = 112233;
console.log(chalk.cyanBright("\n \tWelcome to 1mr2joy6-ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: chalk.yellow("Enter your pin:"),
        type: "number"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log(chalk.green("Correct pin code!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.greenBright("Please select one of the option:"),
            type: "list",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawalMethod",
                message: chalk.cyan("Choose your withdrawal method:"),
                type: "list",
                choices: ["Fast cash", "Enter your amount"]
            }
        ]);
        if (withdrawAns.withdrawalMethod === "Fast cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    message: chalk.cyan("Select your amount to withdraw:"),
                    type: "list",
                    choices: ["1000", "5000", "10000", "15000", "20000"]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log(chalk.red("Insufficient Balance!!"));
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(chalk.green("Withdraw Successful!!"));
                console.log("Your remaining balance is:" + myBalance);
                console.log(chalk.yellowBright("Thank You For Using Our ATM Machine!!"));
            }
        }
        else if (withdrawAns.withdrawalMethod === "Enter your amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: ("Enter your amount:"),
                    type: "number"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk.red("Insufficient Balance!!"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(chalk.green("Withdraw Successful!")),
                    console.log("Your remaining balance is:" + myBalance),
                    console.log(chalk.yellowBright("Thankyou for using our ATM Machine.."));
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is:" + myBalance);
    }
}
else {
    console.log(chalk.red("Incorrect pin code!"));
}
