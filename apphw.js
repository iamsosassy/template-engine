const inquirer = require("inquirer");
const fs = require("fs");

// const render = require("./lib/HTMLrender");

const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");

const teamMembers = [

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

        var HTML = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                        </head>
                        <body>
                          <h1>${manager.name}</h1> 
                          <h1>${manager.role}</h1> 
                          <h1>${manager.id}</h1> 
                          <h1>${manager.email}</h1>  
                          <h1>${manager.office}</h1> 
                        </body>
                        </html>`
        fs.writeFile('manager.html', HTML, function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
        addanothermember()
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

        teamMembers.push(testintern);
        addanothermember();
    });

}
createIntern();

function starterq() {
    inquirer.prompt([{
            name: 'addmember',
            type: 'list',
            choices: ['Manager', 'Intern']
        }


    ]).then(function(answer) {
        console.log(answer);
        if (answer.addmember === 'Intern') {
            createIntern();
        } else if (answer.addmember === 'Manager') {
            createManager();
        }

    })
}
starterq()

function addanothermember() {
    inquirer.prompt([{
            name: 'addanothermember',
            type: 'confirm',

        }


    ]).then(function(answer) {
        console.log(answer);
        if (answer.addanothermember === true) {
            starterq();
        } else if (answer.addanothermember === false) {
            console.log("Time to make the HTML");
            renderHTML()
        }
    })
}

function renderHTML() {
    var HTMLcards = [];

    for (var i = 0; i < teamMembers.length; i++) {
        console.log("single employee", teamMembers[i]);
        if (teamMembers[i].role === 'Intern') {
            console.log("make intern html");
            var internCard = ` <h1>${teamMembers[i].name}</h1> 
            <h1>${teamMembers[i].role}</h1> 
            <h1>${teamMembers[i].id}</h1> 
            <h1>${teamMembers[i].email}</h1>  
            <h1>${teamMembers[i].school}</h1> `

            HTMLcards.push(internCard)

        } else if (teamMembers[i].role === "Manager") {
            console.log("make manager HTML")
            var managerCard = `<h1>${teamMembers[i].name}</h1> 
            <h1>${teamMembers[i].role}</h1> 
            <h1>${teamMembers[i].id}</h1> 
            <h1>${teamMembers[i].email}</h1>  
            <h1>${teamMembers[i].office}</h1> `

            HTMLcards.push(managerCard)
        }
    }

    var HTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Document</title>
        </head>
        <body>
            ${HTMLcards}
        </body>
        </html>`
    fs.writeFile('employees.html', HTML, function(err) {
        if (err) throw err;
        console.log('Saved!');
    });

}