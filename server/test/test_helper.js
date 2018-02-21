const mongoose = require('mongoose');

before( done => {
  mongoose.connect('mongodb://localhost/events_test');
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning', error);
    });
});

beforeEach( done => {
  const { signforms } = mongoose.connection.collections;
  signforms.drop()
    .then( () => done())
    .catch( () => done());
});