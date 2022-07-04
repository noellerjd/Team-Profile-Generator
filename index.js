const inquirer = rquire ('inquirer');
const fs = require('fs');

const html_base =({}) => `

`

init = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'project_title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'member1_name',
            message: `What is the first member's first name?`
        },
        {
            type: 'list',
            name: 'member1_jobtitle',
            message: 'What is their job?',
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: 'number',
            name: 'member1_ID',
            message: 'Please enter an ID number for this team member'
        },
        {
            type: 'input',
            name: 'member1_email',
            message: `Please enter the team member's email address`
        },
        {
            type: 'input',
            name: 'member1_github',
            message: `Please enter the team member's github username`
        },
        {
            type: 'input',
            name: 'member2_name',
            message: `What is the next member's first name?`
        },
        {
            type: 'list',
            name: 'member2_jobtitle',
            message: 'What is their job?',
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: 'number',
            name: 'member2_ID',
            message: 'Please enter an ID number for this team member'
        },
        {
            type: 'input',
            name: 'member2_email',
            message: `Please enter the team member's email address`
        },
        {
            type: 'input',
            name: 'member2_github',
            message: `Please enter the team member's github username`
        },
        {
            type: 'input',
            name: 'member3_name',
            message: `What is the next member's first name?`
        },
        {
            type: 'list',
            name: 'member3_jobtitle',
            message: 'What is their job?',
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: 'number',
            name: 'member3_ID',
            message: 'Please enter an ID number for this team member'
        },
        {
            type: 'input',
            name: 'member3_email',
            message: `Please enter the team member's email address`
        },
        {
            type: 'input',
            name: 'member3_github',
            message: `Please enter the team member's github username`
        },
        {
            type: 'input',
            name: 'member4_name',
            message: `What is the next member's first name?`
        },
        {
            type: 'list',
            name: 'member4_jobtitle',
            message: 'What is their job?',
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: 'number',
            name: 'member4_ID',
            message: 'Please enter an ID number for this team member'
        },
        {
            type: 'input',
            name: 'member4_email',
            message: `Please enter the team member's email address`
        },
        {
            type: 'input',
            name: 'member4_github',
            message: `Please enter the team member's github username`
        },
        {
            type: 'input',
            name: 'member5_name',
            message: `What is the next member's first name?`
        },
        {
            type: 'list',
            name: 'member5_jobtitle',
            message: 'What is their job?',
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: 'number',
            name: 'member5_ID',
            message: 'Please enter an ID number for this team member'
        },
        {
            type: 'input',
            name: 'member5_email',
            message: `Please enter the team member's email address`
        },
        {
            type: 'input',
            name: 'member5_github',
            message: `Please enter the team member's github username`
        }
    ])
    .then((data) => {
        const htmlConstruct = html_base(data)
        fs.writeFile(`Generated-Index.html`, htmlConstruct, (err) => {
            err ? console.error(err) : console.log('Generating Team Profile')
        })
    })
}