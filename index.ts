import inquirer from "inquirer";
import chalk from "chalk";



// initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;

// print welcome messege
console.log(chalk.blue("\n\tWelcome to Code With Huzaifah - ATM Machine\n"));

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            type: "number",
            message: chalk.cyan("Enter your pin code: ")
        }
    ]
)
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nPin code is correct, Login Successfully!\n"));
    // console.log(`Current Account Balance is ${myBalance}`)

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                type: "list",
                message: "Select your operation",
                choices: ["Withdraw Amount", "Check Balance", ]
            }
        ]
    )
    if(operationAns.operation === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt(
            [
                {
                    name: "withdrawMethod",
                    type: "list",
                    message: "Select your withdrawl method",
                    choices: ["Fast Cash", "Enter Amount"]
                }
            ]
        )
         if(withdrawAns.withdrawMethod === "Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: ["1000", "2000", "5000", "10000", "20000", "50000"]
                }
            ])
            if(fastCashAns.fastCash > myBalance){
                console.log("Insufficient Balance");
            }
            else{
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} Withdraw Successfully`);
                console.log(`Your Remaining Balance is ${myBalance}`);
                
            }
        }
        if(withdrawAns.withdrawMethod === "Enter Amount"){
            let amountAns = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to withdraw: "
                    }
                ]
            )
            if(amountAns.amount > myBalance){
                console.log(chalk.red("Insufficient Balance"));
            }
            else{
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
    
    
        }
        }

        
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Account Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.red(" Pin is  Incorrect, Try Again!"));
}