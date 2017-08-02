const { ObjectID } = require('mongodb');

class BaseMongoDbData {
    constructor(db, modelClass) {
        this.db = db;
        this.modelClass = modelClass;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    filterBy(props) {
        return this.collection.find(props)
            .toArray();
    }

    getAll() {
        return this.collection.find()
            .toArray()
            .then((models) => {
                if (this.modelClass.toViewModel) {
                    return models.map(
                        (model) => this.modelClass.toViewModel(model)
                    );
                }

                return models;
            });
    }

    create(model) {
        if (!this._isModelValid(model)) {
            return Promise.reject('Validation failed!');
        }
        return this.collection.insert(model)
            .then(() => {
                return model;
            });
    }

    findById(id) {
        return this.collection.findOne({
            _id: new ObjectID(id),
        });
    }

    findOrCreateBy(props) {
        return this.filterBy(props)
            .then(([model]) => {
                if (!model) {
                    model = {};
                    return this.create(model);
                }

                return model;
            });
    }

    updateById(model) {
        return this.collection.updateOne({
            _id: model._id,
        }, model);
    }

    _isModelValid(model) {
        if (typeof this.modelClass.isValid !== 'function') {
            return true;
        }

        return this.modelClass.isValid(model);
    }

    _getCollectionName() {
        return this.modelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseMongoDbData;
