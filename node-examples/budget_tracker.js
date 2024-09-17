const prompt = require("prompt-sync")();
let expenses = [];
let categoryCache = [];
let budget;

function AddExpense(expense, category){
    if(expense > budget){
        console.log("expense exceeds budget");
        return;
    }
    if(categoryCache[category] == undefined){
         categoryCache[category] = 0;
    }
    let expenseData = {
        expense: expense,
        category: category,
        incrementalFactoryUID: categoryCache[category]
    }
    categoryCache[category]++;
    expenses.push(expenseData);
    budget -= expense;
}

function ViewExpenses(){
    for(let i = 0; i < expenses.length; i++){
        console.log(expenses[i].expense + " " + expenses[i].category);
    }
}

function CheckBudget(){
    let sum = 0;
    for(let i = 0; i < expenses.length; i++){
        sum += expenses[i];
    }
    console.log(sum);
}

function RemoveExpense(){
    let expense = prompt("enter category");

    for(let i = 0; i < expenses.length; i++){
        if(expenses[i].category == expense && expenses[i].incrementalFactoryUID == 0){
            budget += expenses[i].expense;
            expenses.splice(i, 1);
            console.log("expense removed" + "\n" + "\n");
            return;
        }
    }
}

let functions = {
    1: function(){
        let expense = prompt("enter expense: ");
        let category = prompt("enter category: ");
        AddExpense(expense, category);
    },
    2: ViewExpenses,
    3: CheckBudget,
    4: RemoveExpense,
    5: function(){
        return
    }
}

let choice = prompt("enter the budget: ")
budget = parseInt(choice);

function PrintPrompt(){
    console.log("1. Add expense")
    console.log("2. View expenses")
    console.log("3. Check budget")
    console.log("4. Remove expense")
    console.log("5. Exit")
    choice = parseInt(prompt("What do you want to do? "))
    if(choice == 5){
        console.log("Goodbye")
    }
}

while(choice != 5){
    PrintPrompt();
    functions[choice]();
}