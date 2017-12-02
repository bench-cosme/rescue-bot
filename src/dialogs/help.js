const builder = require('botbuilder');

const consts = require('../config/consts');
const card = require('../helpers/cardBuilder');

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
            session.replaceDialog('/Incidents/Crime');
        } else if(results.response.entity == choices[1]){
            session.replaceDialog('/Incidents/Corruption');
        } else if(results.response.entity == choices[2]){
            session.replaceDialog('/Incidents/Calamity');
        } else if(results.response.entity == choices[3]){
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
        session.send(choices.length)
        if(!results.response){
            session.replaceDialog('/');
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