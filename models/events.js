"use-strict"

const mongoose = require('mongoose');

let eventsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    eventData: String
});

const Events = mongoose.model('Events', eventsSchema);

module.export = Events;
