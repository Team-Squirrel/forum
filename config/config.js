/* globals process */
/* eslint-disable no-process-env */

const port = process.env.PORT || 3018;
const connectionString = 'mongodb://localhost/forum-db';
const sessionSecret = 'Purple Unicorn';

module.exports = { port, connectionString, sessionSecret };
