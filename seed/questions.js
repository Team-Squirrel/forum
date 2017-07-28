/* eslint-disable no-console */

const config = require('../config');
const faker = require('faker');

Promise.resolve()
    .then(() => require('../db').init(config.connectionString))
    .then((db) => {
        let q = {};
        for (let i = 0; i < 50; i++) {
            q = {
                body: faker.lorem.paragraph(),
                title: faker.lorem.sentence(),
            };

            db.collection('questions').insert(q);
        }
        console.log('Db seeded with 50 questions.');
        db.close();
    });
