const assert = require('assert');
const SignForm = require('../models/signForm');

describe('Validate records', () => {
    
    it('requires fill all inputs', () => {
        const signForm = new SignForm({ firstName: undefined, lastName: "Kowalski", email: 'test@test.com', eventDate: "03.03.2018" });
        const validationResult = signForm.validateSync();
        const { message } = validationResult.errors.firstName;

        assert(message === 'Please enter your name');
    });
});