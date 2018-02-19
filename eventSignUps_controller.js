const SignForm = require('./models/signForm');

module.exports = {
    create(req, res, next) {
        const eventFormProps = req.body;

        SignForm.create(eventFormProps)
            .then( event => res.send(event))
            .catch(next);
    }
};