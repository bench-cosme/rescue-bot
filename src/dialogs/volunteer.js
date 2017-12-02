const builder = require('botbuilder');

const consts = require('../config/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');

module.exports = [
    session => {
        session.send(consts.prompts.emergency[0])
        session.send(consts.prompts.emergency[1])
        builder.Prompts.text(session, consts.prompts.volunteer[2]);
    },
    (session, results) => {
        var cancel = /^cancel/i.test(session.message.text || results.response);

        if (!cancel) {
            session.send(consts.prompts.emergency[3]);

            api.sendSMS(results.response, (res) => {
                builder.Prompts.choice(session, consts.prompts.emergency[2], consts.choices.confirm, consts.styles.mr_button);
            });

        } else {
            session.endConversation('Alright! type "Help" to see options');
        }
    },
    (session, results) => {
        var cancel = /^cancel/i.test(session.message.text || results.response);

        if (!cancel) {
            session.send(consts.prompts.emergency[4]);

            api.sendSMS(results.response, (res) => {
                builder.Prompts.choice(session, consts.prompts.emergency[2], consts.choices.confirm, consts.styles.mr_button);
            });

        } else {
            session.endConversation('Alright! type "Help" to see options');
        }
    },
    (session, results) => {
        var cancel = /^cancel/i.test(session.message.text || results.response);

        if (!cancel) {
            session.send(consts.prompts.emergency[5]);

            api.sendSMS(results.response, (res) => {
                builder.Prompts.choice(session, consts.prompts.emergency[2], consts.choices.confirm, consts.styles.mr_button);
            });

        } else {
            session.endConversation('Alright! type "Help" to see options');
        }
    },
    (session, results) => {
        var cancel = /^cancel/i.test(session.message.text || results.response);

        if (!results.response) {
            session.replaceDialog('/');
        }
        else if (cancel) {
            session.endConversation('Alright! type "Help" to see options');
        }
        else {
            session.endConversation(consts.prompts.emergency[6]);
        }
    }
]