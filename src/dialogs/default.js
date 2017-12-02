const builder = require('botbuilder');

const consts = require('../config/consts')
const api = require('../helpers/apiRequest')

module.exports = [
    session => {
        //Check if NLP present in sourceEvent
        // let entities = ('nlp' in session.message.sourceEvent.message) ? session.message.sourceEvent.message.nlp.entities : undefined;
        
        //If NLP is Entities present
        // if(entities !== undefined){
        //     var intent = Object.keys(entities).length != 0 && !(Object.keys(entities).length > 1) ? entities[Object.keys(entities)][0].value : 'default';
        // } else {
        //     var intent = 'default';
        // }

        // if (intent == 'default'){
        //     var body = {
        //         expression: session.message.text,
        //         client: process.env.CLIENT
        //     }

        //     api.inbox(body, (err, res) => {
        //         if(err) throw err;
        //         // session.endConversation(randomReplies(consts.prompts.default));
        //         builder.Prompts.choice(session, randomReplies(consts.prompts.default), consts.choices.default, consts.styles.mr_auto);
        //     });
        // } else {
        //     api.recognize(intent, (err, results) => {
        //         if(err) throw err;
                
        //         var replies = results.data.replies;
                
        //         api.userProfile(session.message.user.id, 'first_name', (err, res) => {
        //             session.endConversation(format(randomReplies(replies), res.first_name));
        //         });
                
        //     });
        // }

        builder.Prompts.choice(session, consts.prompts.default, consts.choices.default, consts.styles.mr_button);
    },
    (session, results) => {
        var choices = consts.choices.default;

        if(!results.response){
            session.replaceDialog('/');
        } else if(results.response.entity == choices[0]){
            session.replaceDialog('/Emergency');
        } else {
            session.replaceDialog('/Help');
        }
    }
]

const randomReplies = (replies) => {
    return replies[Math.floor(Math.random() * replies.length)];
}