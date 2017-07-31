const QuestionsData = require('./questions.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        questions: new QuestionsData(db),
        users: new UsersData(db),
    });
};

module.exports = { init };
