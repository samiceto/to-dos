#! /usr/bin/cnv node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoslist = await inquirer.prompt([
        {
            name: "firstname",
            type: "input",
            message: "would you like to add some list in your todos?"
        },
        {
            name: "secondname",
            type: "confirm",
            message: "would you like to add some more?",
            default: true
        }
    ]);
    todos.push(todoslist.firstname);
    console.log(todos);
    condition = todoslist.secondname;
}
