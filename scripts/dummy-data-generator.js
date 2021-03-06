'use strict';

const faker = require('faker');

let property = process.argv[2] || 'dummies';
let db = {};
db[property] = [];

[...Array(5)].map((_, i) => {
  db[property].push({
    id: i,
    name: faker.name.findName(),
    email: faker.internet.email(),
    body: faker.lorem.text(),
  });
});

console.log(JSON.stringify(db));
