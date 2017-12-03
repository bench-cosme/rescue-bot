const builder = require('botbuilder');

const consts = require('../config/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');

module.exports = [
    session => {
        builder.Prompts.text(session, consts.prompts.emergency[0]);
    },
    (session, results) => {
        var cancel = /^cancel/i.test(session.message.text || results.response);

        if(!cancel) {
            session.send(consts.prompts.emergency[1]);
            
            api.sendSMS(results.response, (res) => {
                builder.Prompts.choice(session, consts.prompts.emergency[2], consts.choices.confirm, consts.styles.mr_button);
            });
            
        } else {
            session.endConversation('Alright Got it! type "Help" to see options');
        }
    },
    (session, results) => {
        var choices = consts.choices.confirm;

        if(!results.response){
            session.replaceDialog('/');
        } else if(results.response.entity == choices[0]) {
            //emergency contact logic goes here
            // session.endConversation(consts.prompts.emergency[4]);
            builder.Prompts.number(session, consts.prompts.emergency[3]);
        } else {
            session.endConversation('Alright Got it! type "Help" to see options');
        }
    },
    (session, results) => {

        if(!results.response){
            session.replaceDialog('/');
        } else  {
            session.send(consts.prompts.emergency[4]);
            session.endConversation(consts.prompts.emergency[5]);
        }
    }
]