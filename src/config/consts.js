const builder = require('botbuilder');

exports.PORT = 3978;

exports.prompts = {
    default: [
        'Can you say that again? :) or try tapping buttons below 👇', 
        'Pardon please? or tap choices below 👇', 
        'Sorry can you say that in other way?', 
        'Again please I didn\'t get it', 
        'Sorry I\'m a bit slow can you say that again?', 
        'I really didn\'t get it can you tap the button below it might help :) 👇',
        '❓❓❓ 👇👇👇',
        'What was that again??? 😅',
        'Ugh.... I\'m confusing sorry. 🙄😅'
    ],
    intro: 'Hi I\'m Rescue Bot: your SOS companion, are you on an emergency incident?',
    emergency: [
        'OH NO! Please enter the incident.',
        'Alright stay calm. I\'ve already send it to the Emergency Hotline',
        'Successfully sent message to Emergency Hotline. While we are waiting for response, would you like to send this incident to your emergency contact?',
        'Please enter your emergency contact.',
        'Successfully sent to your Emergency Contact!'
    ]
};

exports.choices = {
    confirm: ['Yes', 'No'],
    default: ['Emergency?', 'Help Options']
};

module.exports.cards = {
    welcome: [
        {
            name: 'welcome',
            title: 'Rescue Bot PH',
            text: '',
            image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            // button: [
            //     {msg:'Start', btn_title: 'Start'},
            //     {msg:'Cancel', btn_title: 'Cancel'},
            //     {url:'https://www.facebook.com/chatbotPH/', btn_title: 'ChatbotPH'}
            // ]
        }
    ],
    help: [
        {
            name: 'incidents',
            title: 'Incidents',
            text: 'Seek help about incidents.',
            image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Incidents', btn_title: 'Proceed'}
            ]
        },
        {
            name: 'donate',
            title: 'Donate',
            text: 'Donate to different charities and foundations.',
            image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Donate', btn_title: 'Proceed'}
            ]
        },
        {
            name: 'volunteer',
            title: 'Volunteer',
            text: 'Be one of the volunteers to people who needed your help.',
            image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Volunteer', btn_title: 'Proceed'}
            ]
        }
    ],
    incidents: [
        {
            name: 'crime',
            title: 'Crime',
            text: 'Seek help and tips about Crime.',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Crime', btn_title: 'Proceed'},
                {msg:'Subscribe', btn_title: 'Subscribe'}
            ]
        },
        {
            name: 'corruption',
            title: 'Corruption',
            text: 'Seek help and tips about Corruption.',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Corruption', btn_title: 'Proceed'},
                {msg:'Subscribe', btn_title: 'Subscribe'}
            ]
        },
        {
            name: 'calamities',
            title: 'Calamities',
            text: 'Seek help and tips about Calamities.',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Calamities', btn_title: 'Proceed'},
                {msg:'Subscribe', btn_title: 'Subscribe'}
            ]
        },
        {
            name: 'accident',
            title: 'Accident',
            text: 'Seek help and tips about Accident.',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Accident', btn_title: 'Proceed'},
                {msg:'Subscribe', btn_title: 'Subscribe'}
            ]
        }
    ],
    crime: [
        {
            name: 'murder',
            title: 'Murder',
            // text: '',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips', btn_title: 'Safety Tips'},
                {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'robbery',
            title: 'Roberry',
            // text: '',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips', btn_title: 'Safety Tips'},
                {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'drugs',
            title: 'Drugs',
            // text: '',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips', btn_title: 'Safety Tips'},
                {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'child abuse',
            title: 'Child Abuse',
            // text: '',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips', btn_title: 'Safety Tips'},
                {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'rape',
            title: 'Rape',
            // text: '',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips', btn_title: 'Safety Tips'},
                {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        }
    ],
    corruption: [
        {
            name: 'corruption',
            title: 'Corruption',
            // text: '',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'News', btn_title: 'Subscribe News'},
                {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        }
    ],
    calamity: [
        {
            name: 'typhoon',
            title: 'Flood/Typhoon',
            // text: '',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips', btn_title: 'Safety Tips'},
                {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'earthquake',
            title: 'Earthquake',
            // text: '',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips', btn_title: 'Safety Tips'},
                {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'fire',
            title: 'Fire',
            // text: '',
            // image: 'http://res.cloudinary.com/shinmarq/image/upload/v1512206652/Logo_3_-01_prwvlf.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips', btn_title: 'Safety Tips'},
                {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        }
    ],
}

module.exports.styles = {
    button: { listStyle: builder.ListStyle.button },
    inline: { listStyle: builder.ListStyle.inline },
    list: { listStyle: builder.ListStyle.list },
    auto: { listStyle: builder.ListStyle.auto },
    none: { listStyle: builder.ListStyle.none },
    mr_button: {listStyle: builder.ListStyle.button, maxRetries: 0},
    mr_inline: {listStyle: builder.ListStyle.inline, maxRetries: 0},
    mr_list: {listStyle: builder.ListStyle.list, maxRetries: 0},
    mr_auto: {listStyle: builder.ListStyle.auto, maxRetries: 0},
    mr_none: {listStyle: builder.ListStyle.none, maxRetries: 0}
}