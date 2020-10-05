const { fake } = require('faker');
let faker = require('faker');
let database = require('./db.json');
// let job_titles = ['']; job_titles[Math.floor(Math.random() * job_titles.length)] 
for(let i=1; i<=5; i++){
    database.employees.push({
        id:i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        job_title: faker.name.jobTitle()
    });
}

for(let i=1; i<=5; i++){
    database.employees.push({
        id:i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        job_title: faker.name.jobTitle()
    });
}