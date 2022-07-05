const inquirer = require('inquirer');
const fs = require('fs');

const html_base =({project_title, member1_name, member1_jobtitle, member1_ID, member1_email, member1_github, member2_name, member2_jobtitle, member2_ID, member2_email, member2_github, member3_name, member3_jobtitle, member3_ID, member3_email, member3_github, member4_name, member4_jobtitle, member4_ID, member4_email, member4_github, member5_name, member5_jobtitle, member5_ID, member5_email, member5_github}) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Team Profile</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/style.css">
</head>
<body>
    <section class="nav">
        <div class="header">
            <h1 class="teamname">${project_title}</h1>
        </div>
    </section>
    <section class="body">
        <div class="cardcontainer">
            <div class="card">
                <div class="cardheader">
                    <h1>${member1_name}</h1>
                    <h3>${member1_jobtitle}</h3>
                </div>
                <div class="cardbody">
                    <div class="tile"><p>ID: ${member1_ID}</p></div>
                    <div class="tile">Email: <a href="mailto:${member1_email}">${member1_email}</a></div>
                    <div class="tile">Github: <a href="https://github.com/${member1_github}">${member1_github}</a></div>
                </div>
            </div>
        </div>
        <div class="cardcontainer">
            <div class="card">
                <div class="cardheader">
                    <h1>${member2_name}</h1>
                    <h3>${member2_jobtitle}</h3>
                </div>
                <div class="cardbody">
                    <div class="tile"><p>ID: ${member2_ID}</p></div>
                    <div class="tile">Email: <a href="mailto:${member2_email}">${member2_email}</a></div>
                    <div class="tile">Github: <a href="https://github.com/${member2_github}">${member2_github}</a></div>
                </div>
            </div>
        </div>
        <div class="cardcontainer">
            <div class="card">
                <div class="cardheader">
                    <h1>${member3_name}</h1>
                    <h3>${member3_jobtitle}</h3>
                </div>
                <div class="cardbody">
                    <div class="tile"><p>ID: ${member3_ID}</p></div>
                    <div class="tile">Email: <a href="mailto:${member3_email}">${member3_email}</a></div>
                    <div class="tile">Github: <a href="https://github.com/${member3_github}">${member3_github}</a></div>
                </div>
            </div>
        </div>
        <div class="cardcontainer">
            <div class="card">
                <div class="cardheader">
                    <h1>${member4_name}</h1>
                    <h3>${member4_jobtitle}</h3>
                </div>
                <div class="cardbody">
                    <div class="tile"><p>ID: ${member4_ID}</p></div>
                    <div class="tile">Email: <a href="mailto:${member4_email}">${member4_email}</a></div>
                    <div class="tile">Github: <a href="https://github.com/${member4_github}">${member4_github}</a></div>
                </div>
            </div>
        </div>
        <div class="cardcontainer">
            <div class="card">
                <div class="cardheader">
                    <h1>${member5_name}</h1>
                    <h3>${member5_jobtitle}</h3>
                </div>
                <div class="cardbody">
                    <div class="tile"><p>ID: ${member5_ID}</p></div>
                    <div class="tile">Email: <a href="mailto:${member5_email}">${member5_email}</a></div>
                    <div class="tile">Github: <a href="https://github.com/${member5_github}">${member5_github}</a></div>
                </div>
            </div>
        </div>
    </section>

    
</body>
</html>
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
        },
    ])
    .then((data) => {
        const htmlConstruct = html_base(data)
        fs.writeFile(`Generated-Index.html`, htmlConstruct, (err) => {
            err ? console.error(err) : console.log('Generating Team Profile')
        })
    })
};

init();