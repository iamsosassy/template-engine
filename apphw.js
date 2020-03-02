const inquirer = require("inquirer");
const fs = require("fs");

// const render = require("./lib/HTMLrender");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [
    //   new Manager("Edward", 1, "Edward@heisready.com", 200),
    //   new Engineer("Shirley", 2, "Shirley@sheisready.com", "viaShirley"),
    //   new Intern("Claudia", 3, "Claudia@sheisready.com", "UofA"),
    //   new Intern("Sydney", 4, "Sydney@sheiscool.com", "ASU")
];

function createManager() {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is your manager's office number?"
        }

    ]).then(function(answers) {
        console.log(answers);
        const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
        teamMembers.push(manager);
        addMember();
        var HTML = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                        </head>
                        <body>
                          <h1>${testintern.name}</h1> 
                          <h1>${testintern.role}</h1> 
                          <h1>${testintern.id}</h1> 
                          <h1>${testintern.email}</h1>  
                          <h1>${testintern.school}</h1> 
                        </body>
                        </html>`
        fs.writeFile('intern.html', HTML, function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });
}

function createIntern() {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }

    ]).then(function(answers) {
        console.log(answers);
        const testintern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
        console.log(testintern);
        var HTML = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                        </head>
                        <body>
                          <h1>${testintern.name}</h1> 
                          <h1>${testintern.role}</h1> 
                          <h1>${testintern.id}</h1> 
                          <h1>${testintern.email}</h1>  
                          <h1>${testintern.school}</h1> 
                        </body>
                        </html>`
        fs.writeFile('intern.html', HTML, function(err) {
            if (err) throw err;
            console.log('Saved!');
        });

        // teamMembers.push(intern);
        // addMember();
    });

}
createIntern();