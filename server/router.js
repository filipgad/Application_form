const EventSign = require('./controllers/eventSign_controller');

module.exports = (app) => {
    app.post('/api/events', EventSign.create);
};