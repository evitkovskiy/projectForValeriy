const {Schema, model, Types} = require(`mongoose`);

const schema = new Schema({
    id: {type: String, required: true, unique: true},
    age: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    gender: {type: String, required: true},
    citizenship: {type: String, required: true}
})

module.exports = model(`Person`, schema)