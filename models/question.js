class Question {
    static isValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.title === 'string' &&
            model.title.length > 6 &&
            typeof model.body === 'string' &&
            model.body.length > 20;
    }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new Question();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = Question;
