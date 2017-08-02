const express = require('express');
const bodyParser = require('body-parser');

const init = (data) => {

    const app = express();

    require('./config').applyTo(app);

    // app.use(require('connect-flash')());
    // app.use((req, res, next) => {
    //     res.locals.messages = require('express-messages')(req, res);
    //     next();
    // });

    require('./routers')
        .attachTo(app, data);

    app.set('view engine', 'pug');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        return res.render('home');
    });

    app.get('/questions', (req, res) => {
        return data.questions.getAll()
            .then((questions) => {
                return res.render('questions/all', {
                    context: questions,
                });
            });
    });

    app.post('/questions', (req, res) => {
        const question = req.body;
        return data.questions.create(question)
            .then((dbQuestion) => {
                return res.redirect('/questions/' + dbQuestion.id);
            })
    });
/*
    app.post('/questions', (req, res, user) => {
        const question = req.body;

        if(!question){
            throw new Error("Question cannot be empty.");
        }

        findByUsername(username) {
            return this
                .filterBy({ username: new RegExp(username, 'i') })
                .then(([user]) => user);
        }

        if (!user) {
            throw new Error('Invalid user');
        }

        return data.questions.create(question)
            .then((dbQuestion) => {
                return res.redirect('/questions/' + dbQuestion.id)
            })
    });
*/
    return Promise.resolve(app);
};

module.exports = {
    init,
};
