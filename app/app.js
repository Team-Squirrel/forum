/* globals __dirname */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

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

    app.use('/libs', express.static(path.join(__dirname, '../node_modules/')))

    app.use(cookieParser('keyboard cat'));
    app.use(session({ cookie: { maxAge: 40000 } }));

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

    app.get('/tags', (req, res) => {
        return data.tags.getAll()
            .then((tags) => {
                return res.render('tags/all', {
                    context: tags,
                });
            });
    });

    app.post('/tags', (req, res) => {
        const tag = req.body;
        return data.tags.create(tag)
            .then((dbTag) => {
                return res.redirect('/tags/' + dbTag.id);
            })
    });

/*
    app.post('/questions', (req, res, user) => {
        const question = req.body;

        if(!question){
            throw new Error("Question cannot be empty.");
        }

        if (!BaseMongoDbData._isModelValid(user)) {
            return Promise.reject('Validation failed!');
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
