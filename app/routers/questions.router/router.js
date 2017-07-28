const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/', (req, res) => {
            return controller.index(req, res);
        })
        .get('/create', (req, res) => {
            if (!req.user) {
                return Promise.resolve()
                    .then(() => {
                        res.redirect('/auth/sign-in');
                    });
            }

            return controller.create(req, res);
        })
        .post('/', (req, res) => {
            if (!req.user) {
                return Promise.resolve()
                    .then(() => {
                        res.redirect('/auth/sign-in');
                    });
            }

            return controller.store(req, res);
        });

    app.use('/questions', router);
};

module.exports = { attachTo };
