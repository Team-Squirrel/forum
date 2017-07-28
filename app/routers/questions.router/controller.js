class QuestionsController {
    constructor(data) {
        this.data = data;
    }

    index(req, res) {
        return this.data.questions.getAll()
            .then((questions) => {
                questions = questions || [];

                return res.render('questions/index', {
                    context: questions,
                });
            });
    }

    create(req, res) {
        return Promise.resolve()
            .then(() => {
                return res.render('questions/create');
            });
    }

    store(req, res) {
    }

    show(req, res) {
        return Promise.resolve()
            .then(() => res.render('questions/show'));
    }
}

const init = (data) => {
    return new QuestionsController(data);
};

module.exports = { init };
