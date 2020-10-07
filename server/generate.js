let faker = require('faker');
let database = require('./db.json');
let available = ['yes', 'no'];
let name = ['car wash', 'car detailing', 'carpet deap cleaning', 'carpeat wash', 'office/1m^2','restaurant/1m^2','house/1m^2','leather furniture','textiles furniture'];
for(let i=1; i<=5; i++){
    database.employees.map( e=>{
        e.id=i;
        e.first_name= faker.name.firstName();
        e.last_name= faker.name.lastName();
    });
}

for(let i=1; i<=8; i++){
    database.pricing.push({
        id:i,
        name: name[Math.floor(Math.random() * name.length)],
        price: faker.commerce.price(),
        available: available[Math.floor(Math.random() * available.length)]
    });
}
console.log(JSON.stringify(database));