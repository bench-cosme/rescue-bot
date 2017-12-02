const builder = require('botbuilder');

const consts = require('../config/consts');
const card = require('../helpers/cardBuilder');

module.exports = [
    session => {
        var cardName = card.getName(consts.cards.welcome);
        var msg = card(session, consts.cards.welcome, cardName);

        session.send(msg);
        builder.Prompts.choice(session, consts.prompts.intro, consts.choices.confirm, consts.styles.mr_button);
    },
    (session, results) => {
        var choices = consts.choices.confirm;

        if(!results.response){
            session.replaceDialog('/');
        } else if(results.response.entity == choices[0]) {
            session.replaceDialog('/Emergency');
        } else if(results.response.entity == choices[1]) {
            session.endConversation('Alright Got it! type "Help" to see options');
        }
    }
]
