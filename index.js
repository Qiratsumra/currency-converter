#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgWhiteBright.magenta("\n Welcome to currency convertor"));
let currency = {
    USD: 1,
    PKR: 279.72,
    SUR: 3.75,
    INR: 83.36,
    EURO: 0.93
};
let condition = true;
while (condition) {
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            type: 'list',
            message: "Select the currency to convert from:",
            choices: ["USD", "PKR", "SUR", "INR", "EURO"]
        },
        {
            name: "to",
            type: "list",
            message: "Select the currency to convert into:",
            choices: ["USD", "PKR", "SUR", "INR", "EURO"]
        },
        {
            name: "amount",
            type: "number",
            message: "Enter your amount do want to convert:",
        }
    ]);
    let { from, to, amount } = userAnswer;
    let fromAmount = currency[from];
    let toAmount = currency[to];
    let baseCalculation = amount / fromAmount;
    let finalCalculation = baseCalculation * toAmount;
    let roundNumber = Math.round(finalCalculation);
    console.log(chalk.bgMagentaBright.whiteBright(roundNumber));
    let anotherAnswer = await inquirer.prompt([
        {
            name: "anotherQuestion",
            type: "confirm",
            message: "Do you to another convertion",
            default: false,
        }
    ]);
    if (anotherAnswer.anotherQuestion === true) {
        let secondConvertion = await inquirer.prompt([
            {
                name: "seconndFrom",
                type: "list",
                message: "Select the currency to convert from:",
                choices: ["USD", "PKR", "SUR", "INR", "EURO"]
            },
            {
                name: "secondTo",
                type: "list",
                message: "Select the currency to convert into:",
                choices: ["USD", "PKR", "SUR", "INR", "EURO"]
            },
            {
                name: "secondAmount",
                type: "number",
                message: "Enter your amount do want to convert:",
            },
        ]);
        let { secondFrom, secondTo, secondAmount } = secondConvertion;
        let secondFromCurrency = currency[secondFrom];
        let secondToCurrency = currency[secondTo];
        let secondBase = secondAmount / secondFrom;
        let secondFinalCalculation = secondBase * secondTo;
        console.log(chalk.bgMagentaBright.whiteBright(Math.round(secondFinalCalculation)));
        condition = false;
    }
    else {
        console.log(chalk.bgMagentaBright.whiteBright(`Thanks for using`));
        condition = false;
    }
}
