const builder = require('botbuilder');
const restify = require('restify');

const dialogs = require('./src/dialogs');
const consts = require('./src/config/consts');
const api = require('./src/helpers/apiRequest');

//=========================================================
// Bot Setup
//=========================================================

/**Create chat bot*/
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
const bot = new builder.UniversalBot(connector);

//=========================================================
// Bots Middleware
//=========================================================
/**
 bot.use({
    send: (event, next) => {
        console.log(event);
        next();
    },
    receive: (event, next) => {
        console.log(event);
        next();
    },
});
 */
bot.use(builder.Middleware.dialogVersion({ version: 1.0, resetCommand: /^reset/i }));
bot.use(builder.Middleware.sendTyping());
bot.use({
    botbuilder: (session, next) => {
        var restart = /^restart|started|get started|start over|get_started/i.test(session.message.text);

        api.userProfile(session.message.user.id, 'first_name,last_name', (err, res) => {
            console.log(res)
            var body = {
                name: {
                    firstname: res.first_name,
                    lastname: res.last_name
                },
                fb_id: session.message.user.id
            }
            api.addUser(body);
        });

        if (restart) {
            session.userData = {}; 
            session.privateConversationData = {};
            session.conversationData = {};
            session.dialogData = {};

            /**INSERT BEGIN DIALOG HERE*/
            session.beginDialog('/GetStarted');
        }else { next(); }

    }
});

//=========================================================
// Bot's Dialogs
//=========================================================

bot.dialog('/', dialogs.default);
bot.dialog('/GetStarted', dialogs.getStarted);
bot.dialog('/Emergency', dialogs.emergency)
.triggerAction({
    matches: /^emergency|EMERGENCY$/i
});
bot.dialog('/Help', dialogs.help)
.triggerAction({
    matches: /^Help|help|HELP$/i
});
bot.dialog('/Incidents', dialogs.help.incidents);
bot.dialog('/Incidents/Crime', dialogs.help.crime)
.triggerAction({
    matches: /^crime|CRIME$/i
});
bot.dialog('/Incidents/Corruption', dialogs.help.corruption)
.triggerAction({
    matches: /^corruption|CORRUPTION$/i
});
bot.dialog('/Incidents/Calamity', dialogs.help.calamity)
.triggerAction({
    matches: /^calamity|CALAMITY$/i
});
bot.dialog('/Incidents/Accident', dialogs.help.accident)
.triggerAction({
    matches: /^accident|Accident$/i
});
//=========================================================
// Server Setup
//=========================================================

const server = restify.createServer();

/**Endpoint for incoming messages*/
server.post('/api/messages', connector.listen());

server.listen(process.env.PORT || process.env.port || consts.PORT, () => {
    console.log('Restify to port', server.url);
});
require('./src/helpers/apiRequest').getStarted('Get_Started');
require('./src/helpers/apiRequest').persistentMenu(consts.persistentMenu);