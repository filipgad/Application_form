const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignFormSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    eventDate: {
        type: String,
        required: true
    }
});

const SignForm = mongoose.model('signForms', SignFormSchema);

module.exports = SignForm;