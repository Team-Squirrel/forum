/* eslint-disable no-console */

const config = require('./config');

Promise.resolve()
    .then(() => require('./db').init(config.connectionString))
    .then((db) => require('./data').init(db))
    .then((data) => require('./app').init(data))
    .then((app) => {
        app.listen(config.port, () =>
            console.log(`App running at :${config.port}`));
    })
    .catch((err) => {
        console.log(err);
    });
