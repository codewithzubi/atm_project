import inquirer from "inquirer";
let myBlance = 4000; //Dollar
let mypin = 1122;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "ENTER YOUR PIN NUMBER",
    },
]);
if (pinAnswer.pin === mypin) {
    console.log("YOUR PIN NUMBER IS CORRECT \n ***WHAT WANT YOU DO***");
    let operationAns = await inquirer.prompt([
        {
            name: "opeartion",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Blance"],
        },
    ]);
    if (operationAns.opeartion === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "ENTER YOUR AMOUNT",
            },
        ]);
        let remaningBlance = myBlance - amountAns.amount;
        if (remaningBlance < 0) {
            console.log("YOUR BLANCE IS LOW SORRY!!!!");
        }
        else {
            console.log(`YOUR REMANING BLANCE IS ${remaningBlance}`);
        }
    }
    if (operationAns.opeartion === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                choices: ["2000", "4000", "6000", "8000", "10,000"],
            },
        ]);
        let fastCashAmount = parseInt(fastCashAns.fastCash);
        let remaningBlance = myBlance - fastCashAmount;
        if (remaningBlance < 0) {
            console.log("YOUR BLANCE IS LOW SORRY!!!!");
        }
        else {
            console.log(`YOUR REMANING BLANCE IS ${remaningBlance}`);
        }
    }
    if (operationAns.opeartion === "Check Blance") {
        console.log(`YOUR BLANCE IS ${myBlance}`);
    }
}
else {
    console.log("YOUR PIN NUMBER IS INCORRECT");
}
