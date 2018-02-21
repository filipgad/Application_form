const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../config/app');
const SignForm = mongoose.model('signforms');

describe('EventSign controller', () => {
    it('POST to /api/events creates a new eventUp', (done) => {
        SignForm.count().then(count => {
            request(app)
                .post('/api/events')
                .send({ firstName: "Damian", lastName: "Kowalski", email: 'test@test.com', eventDate: "03.03.2018" })
                .end(() => {
                    SignForm.count().then(newCount => {
                        assert(count + 1 === newCount);
                        done();
                    });
                });
        });
    });
});