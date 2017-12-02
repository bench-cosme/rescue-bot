const builder = require('botbuilder');
const format = require('string-format');

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
        console.log(choices)
        if(!results.response){
            session.replaceDialog('/');
        } else {
            switch(results.response.entity) {
                case choices[0]:
                    session.replaceDialog('/Incidents/Crime');
                break;

                case choices[1]:
                    var subscription = 'Crime'
                    session.endConversation(format('You\'re now subscribed to news about {0}', subscription));
                    editUser(session.message.user.id, subscription);
                break;

                case choices[2]:
                    session.replaceDialog('/Incidents/Corruption');
                break;

                case choices[3]:
                    var subscription = 'Corruption'
                    session.endConversation(format('You\'re now subscribed to news about {0}', subscription));
                    editUser(session.message.user.id, subscription);
                break;

                case choices[4]:
                    session.replaceDialog('/Incidents/Calamity');
                break;

                case choices[5]:
                     var subscription = 'Calamity'
                     session.endConversation(format('You\'re now subscribed to news about {0}', subscription));
                     editUser(session.message.user.id, subscription);
                break;

                case choices[6]:
                    session.replaceDialog('/Incidents/Accident');
                break;

                case choices[7]:
                    var subscription = 'Accident'
                    session.endConversation(format('You\'re now subscribed to news about {0}', subscription));
                    editUser(session.message.user.id, subscription);
                break;
            }
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
            switch(results.response.entity){
                case choices[0]:case choices[3]:case choices[6]:case choices[9]:case choices[12]:
                    session.replaceDialog('/Emergency');
                break;

                case choices[1]:
                    var crime = 'Murder';
                    api.getIncidents(crime, (res) => {
                        console.log(res);
                        var tips = res.safetytips[0].tips;

                        tips.forEach((tip) => {
                            session.endConversation(tip);
                        })
                    });
                    
                break;

                case choices[4]:
                    var crime = 'Murder';
                    console.log('tips_rob');
                break;

                case choices[7]:
                    var crime = 'Murder';
                    console.log('tips_drugs');
                break;

                case choices[10]:
                    var crime = 'Abuse';
                    console.log('tips_childabuse');
                break;

                case choices[13]:
                    console.log('tips_rape');
                break;

                case choices[2]:
                    console.log('tips_rape');
                break;

                case choices[5]:
                break;

                case choices[8]:
                break;

                case choices[11]:
                break;

                case choices[14]:
                break;
                
            }
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
        } else {
            switch(results.response.entity) {
                case choices[0]:case choices[3]:case choices[6]:case choices[9]:case choices[12]:
                    session.replaceDialog('/Emergency');
                break;
            }
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
        } else {
            switch(results.response.entity) {
                case choices[0]:case choices[3]:case choices[6]:case choices[9]:case choices[12]:
                    session.replaceDialog('/Emergency');
                break;
            }
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
        } else {
            switch(results.response.entity) {
                case choices[0]:case choices[3]:case choices[6]:case choices[9]:case choices[12]:
                    session.replaceDialog('/Emergency');
                break;
            }
        }
    }
]


function editUser(id, subscriptions) {
    var body = {
        subscriptions: subscriptions,
        receive_time: Date.now()
    }

    api.editUser(id, body);
}