const request = require('request');
const format = require('string-format');

/**FB USER-PROFILE API */
module.exports.userProfile = 
(uid, fields, callback) => {
    var options = {
        url: format('https://graph.facebook.com/v2.6/{0}?fields={1}&access_token={2}', uid, fields, process.env.ACCESS_TOKEN) ,
        method: 'GET'
    }

    request(options, (err, httpRes, body) => {
        !err ? callback(null, JSON.parse(body)) : callback(err, body); 
    })
}
/**END */

/**FB GET STARTED BUTTON API */
module.exports.getStarted = 
(payload) => {
    var option = {
        url: format('https://graph.facebook.com/v2.6/me/messenger_profile?access_token={0}', process.env.ACCESS_TOKEN),
        method: 'POST',
        body: {
            get_started: {
                payload: payload
            }
        },
        json: true
    }

    request(option, (err, httpRes, body) => {
        !err ? console.log(body) : console.log(err); 
    })
}
/**END */

/**FB PERSISTENT MENU API */
module.exports.persistentMenu = 
(body) => {
    var option = {
        url: format('https://graph.facebook.com/v2.6/me/messenger_profile?access_token={0}', process.env.ACCESS_TOKEN),
        method: 'POST',
        body: body,
        json: true
    }

    request(option, (err, httpRes, body) => {
        !err ? console.log(body) : console.log(err); 
    })
}
/**END */

/**TWILIO API */
module.exports.sendSMS =
(body, callback) => {
    
    const accountSid = process.env.TWILIO_SID; 
    const authToken = process.env.TWILIO_TOKEN; 
    
    var client = require('twilio')(accountSid, authToken); 
    
    client.messages.create({ 
        to: "+639151877608", 
        from: "+19472224483", 
        body: body, 
    }, function(err, message) {
        if(err) throw err;

        callback(message.sid)
    });

}
/**END */

/**USER API */
module.exports.addUser = 
(body) => {
    var option = {
        url: 'https://rescue-api.azurewebsites.net/user',
        method: 'POST',
        body: body,
        json: true
    }

    request(option, (err, httpRes, body) => {
        !err ? console.log(body) : console.log(err); 
    })
}

module.exports.editUser = 
(id, body) => {
    var option = {
        url: format('https://rescue-api.azurewebsites.net/user/{0}', id),
        method: 'PATCH',
        body: body,
        json: true
    }

    request(option, (err, httpRes, body) => {
        !err ? console.log(body) : console.log(err); 
    })
}
/**END */