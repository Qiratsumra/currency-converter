#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
console.log(chalk.hex("#f58442")("\t Welcome to CLI-Currency Converter \t"));


let  currency:any={
    USD:1,
    PKR:277.54,
    INR:85,
    IRR:42076.08,
    SAR:3.75 ,
    EUR:0.92,
};

let user_answer = await inquirer.prompt(
    [
        {
            name:"fromCurrency",
            type:"list",
            choices:["USD","PKR","INR","IRR","SAR","EUR"],
            message:"Select the currency?"
        },
        {
            name:"toCurrency",
            type:"list",
            choices:["USD","PKR","INR","IRR","SAR","EUR"],
            message:"Select the currency to convert?"
        },
        {
            name:"amount",
            type:"number",
            message:"Enter your amount?"
        }
    ]
);

let fromAmount = currency[user_answer.fromCurrency];
let toAmount = currency[user_answer.toCurrency];
let totalAmount =user_answer.amount;
let baseAmount = totalAmount / fromAmount;
let convert = baseAmount * toAmount;
 convert=Math.round(convert)
console.log(convert);



