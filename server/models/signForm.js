const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignFormSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email']
    },
    eventDate: {
        type: String,
        required: [true, 'Please choose the event date']
    }
});

const SignForm = mongoose.model('signforms', SignFormSchema);

module.exports = SignForm;