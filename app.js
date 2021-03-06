const inquirer = require("inquirer");

const render = require("./lib/HTMLrender");

const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");

const teamMembers = [
    //   new Manager("Edward", 1, "Edward@heisready.com", 200),
    //   new Engineer("Shirley", 2, "Shirley@sheisready.com", "viaShirley"),
    //   new Intern("Claudia", 3, "Claudia@sheisready.com", "UofA"),
    //   new Intern("Sydney", 4, "Sydney@sheiscool.com", "ASU")
];

// function createManager() {
//     inquirer.prompt([{
//             type: "input",
//             name: "name",
//             message: "What is your manager's name?"
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is your manager's id?"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is your manager's email?"
//         },
//         {
//             type: "input",
//             name: "office",
//             message: "What is your manager's office number?"
//         }

//     ]).then(function(answers) {
//         const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
//         teamMembers.push(manager);
//         addMember();
//     });
// }

// function addMember() {
//     inquirer.prompt([{
//         type: "list",
//         name: "type",
//         message: "Which type of team member would you like to add?",
//         choices: [
//             "Engineer",
//             "Intern",
//             "I don't want to add any more team members"
//         ]

//     }]).then(function(answer) {
//         if (answer.type === "Engineer") {
//             createEngineer();
//         } else if (answer.type === "Intern") {
//             createIntern();
//         } else {
//             render(teamMembers);
//         }

//     })
// }

// function createEngineer() {
//     inquirer.prompt([{
//             type: "input",
//             name: "name",
//             message: "What is your engineer's name?"
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is your engineer's id?"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is your engineer's email?"
//         },
//         {
//             type: "input",
//             name: "github",
//             message: "What is your engineer's github?"
//         }

//     ]).then(function(answers) {
//         const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
//         teamMembers.push(engineer);
//         addMember();
//     });

// }

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
<<<<<<< HEAD
        // const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
=======
        const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
>>>>>>> 6493defc88388450b56d03ed6411e6f74e456bb0
        // teamMembers.push(intern);
        // addMember();
    });

}
createManager();



// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");​
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");​
// const render = require("./lib/htmlRenderer");
// ​call render with a list of employees
// write file to outputPath
<<<<<<< HEAD
// ​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// 
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// ​
=======
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
>>>>>>> 6493defc88388450b56d03ed6411e6f74e456bb0
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
<<<<<<< HEAD
// ​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// ​
=======
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
>>>>>>> 6493defc88388450b56d03ed6411e6f74e456bb0
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```