const EventSignUps = require('./eventSignUps_controller');

module.exports = (app) => {
    app.post('/api/events', EventSignUps.create);
};