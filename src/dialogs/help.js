const builder = require('botbuilder');

const consts = require('../config/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');

module.exports = [
    session => {
        var cardName = card.getName(consts.cards.help);
        var msg = card(session, consts.cards.help, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.cards.help), consts.styles.mr_button);
    },
    (session, results) => {
        var choices = card.choices(consts.cards.help);

        if(!results.response){
            session.replaceDialog('/');
        } else if(results.response.entity == choices[0]) {
            session.replaceDialog('/Incidents');
        }
    }
]

module.exports.incidents = [
    session => {
        var cardName = card.getName(consts.cards.incidents);
        var msg = card(session, consts.cards.incidents, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.cards.incidents), consts.styles.mr_button); 
    },
    (session, results) => {
        var choices = card.choices(consts.cards.incidents);

        if(!results.response){
            session.replaceDialog('/');
        } else if(results.response.entity == choices[0]){
            editUser(session.message.user.id, results.response.entity);
            session.replaceDialog('/Incidents/Crime');
        } else if(results.response.entity == choices[1]){
            editUser(session.message.user.id, results.response.entity);
            session.replaceDialog('/Incidents/Corruption');
        } else if(results.response.entity == choices[2]){
            editUser(session.message.user.id, results.response.entity);
            session.replaceDialog('/Incidents/Calamity');
        } else if(results.response.entity == choices[3]){
            editUser(session.message.user.id, results.response.entity);
            session.replaceDialog('/Incidents/Accident');
        }
    }
]

module.exports.crime = [
    session => {
        var cardName = card.getName(consts.cards.crime);
        var msg = card(session, consts.cards.crime, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.cards.crime), consts.styles.mr_button); 
    },
    (session, results) => {
        var choices = card.choices(consts.cards.crime);

        if(!results.response){
            session.replaceDialog('/');
        } else {
            // switch(results.response.entity){
            //     case choices[0]:case choices[3]:case choices[6]:case choices[9]:case choices[12]:
            //         session.replaceDialog('/Emergency');
            //     break;

            //     case choices[1]:
            //         console.log('tips_murder');
            //     break;

            //     case choices[4]:
            //         console.log('tips_rob');
            //     break;

            //     case choices[7]:
            //         console.log('tips_drugs');
            //     break;

            //     case choices[10]:
            //         console.log('tips_childabuse');
            //     break;

            //     case choices[13]:
            //         console.log('tips_rape');
            //     break;

            //     case choices[2]:
            //         console.log('tips_rape');
            //     break;

            //     case choices[5]:
            //     break;

            //     case choices[8]:
            //     break;

            //     case choices[11]:
            //     break;

            //     case choices[14]:
            //     break;
                
            // }
        }

        
    }
]

module.exports.corruption = [
    session => {
        var cardName = card.getName(consts.cards.corruption);
        var msg = card(session, consts.cards.corruption, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.cards.corruption), consts.styles.mr_button); 
    },
    (session, results) => {
        var choices = card.choices(consts.cards.corruption);

        if(!results.response){
            session.replaceDialog('/');
        } 
    }
]

module.exports.calamity = [
    session => {
        var cardName = card.getName(consts.cards.calamity);
        var msg = card(session, consts.cards.calamity, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.cards.calamity), consts.styles.mr_button); 
    },
    (session, results) => {
        var choices = card.choices(consts.cards.calamity);

        if(!results.response){
            session.replaceDialog('/');
        } 
    }
]

module.exports.accident = [
    session => {
        var cardName = card.getName(consts.cards.accident);
        var msg = card(session, consts.cards.accident, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.cards.accident), consts.styles.mr_button); 
    },
    (session, results) => {
        var choices = card.choices(consts.cards.accident);

        if(!results.response){
            session.replaceDialog('/');
        } 
    }
]


function editUser(id, subscriptions) {
    var body = {
        subscription: subscriptions,
        receive_time: Date.now()
    }

    api.editUser(id, body);
}