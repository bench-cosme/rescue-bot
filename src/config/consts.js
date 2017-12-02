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
    ],
    volunteer: [
        'Volunteers are the lifeline of all operations of any foundation. Each need volunteers that can help respond to our fellow Filipinos in disasters and calamities.',
        'Please answer the following as completely and honestly as possible',
        'What is your full name?',
        'Please enter your address',
        'Can I have your email please?',
        'What\'s your area of interest?',
        'Great! I\'ve already sent your information to this foundation\'s email. You will receive a response from them soon.'
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
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512248461/rescue/please-help-rubber-stamp-image_csp47597172.jpg',
            button: [
                { msg: 'Incidents', btn_title: 'Proceed' }
            ]
        },
        {
            name: 'donate',
            title: 'Donate',
            text: 'Donate to different charities and foundations.',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234200/rescue/24463428_1894220150592735_2068578359_o_qroazg.png',
            button: [
                { msg: 'Donate', btn_title: 'Proceed' }
            ]
        },
        {
            name: 'volunteer',
            title: 'Volunteer',
            text: 'Be one of the volunteers to people who needed your help.',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234198/rescue/24323762_1894219993926084_393537852_o_g28mjr.png',
            button: [
                { msg: 'Volunteer', btn_title: 'Proceed' }
            ]
        }
    ],
    incidents: [
        {
            name: 'crime',
            title: 'Crime',
            text: 'Seek help and tips about Crime.',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512249904/rescue/aid166136-v4-900px-Fight-Crime-Step-5-Version-2.jpg',
            button: [
                { msg: 'Crime', btn_title: 'Proceed' },
                { msg: 'Subscribe_Crime', btn_title: 'Subscribe' }
            ]
        },
        {
            name: 'corruption',
            title: 'Corruption',
            text: 'Seek help and tips about Corruption.',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234201/rescue/24623509_1894219843926099_1412550792_o_n1opij.png',
            button: [
                { msg: 'Corruption', btn_title: 'Proceed' },
                { msg: 'Subscribe_Corrupt', btn_title: 'Subscribe' }
            ]
        },
        {
            name: 'calamities',
            title: 'Calamities',
            text: 'Seek help and tips about Calamities.',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234201/rescue/24623509_1894219843926099_1412550792_o_n1opij.png',
            button: [
                { msg: 'Calamities', btn_title: 'Proceed' },
                { msg: 'Subscribe_Cal', btn_title: 'Subscribe' }
            ]
        },
        {
            name: 'accident',
            title: 'Accident',
            text: 'Seek help and tips about Accident.',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512247622/rescue/rescue/stock-vector-using-phone-camera-to-take-and-record-video-picture-of-incident-stick-figure-pictogram-icons-297685925.jpg',
            button: [
                { msg: 'Accident', btn_title: 'Proceed' },
                { msg: 'Subscribe_Acc', btn_title: 'Subscribe' }
            ]
        }
    ],
    crime: [
        {
            name: 'murder',
            title: 'Murder',
            // text: '',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234223/rescue/24463119_1894220310592719_965059867_o_smeh4m.png',
            button: [
                { msg: 'Report', btn_title: 'Report' },
                { msg: 'Tips_M', btn_title: 'Safety Tips' },
                { msg: 'Hotline_M', btn_title: 'Hotlines' },
            ]
        },
        {
            name: 'robbery',
            title: 'Robbery',
            // text: '',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234191/rescue/roberry-01_yv1xyi.png',
            button: [
                { msg: 'Report', btn_title: 'Report' },
                { msg: 'Tips_R', btn_title: 'Safety Tips' },
                { msg: 'Hotline_R', btn_title: 'Hotlines' },
            ]
        },
        {
            name: 'drugs',
            title: 'Drugs',
            // text: '',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512249388/rescue/aid19025-v4-900px-Get-Rid-of-Drug-Dealers-in-Your-Neighborhood-Step-3-Version-3.jpg',
            button: [
                { msg: 'Report', btn_title: 'Report' },
                { msg: 'Tips_D', btn_title: 'Safety Tips' },
                { msg: 'Hotline_D', btn_title: 'Hotlines' },
            ]
        },
        {
            name: 'abuse',
            title: 'Abuse',
            // text: '',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512247876/rescue/17968689-Family-Abuse-Children-Hitting-Confine-Sexual-Harassment-Stick-Figure-Pictogram-Icon-Stock-Vector.jpg',
            button: [
                { msg: 'Report', btn_title: 'Report' },
                { msg: 'Tips_A', btn_title: 'Safety Tips' },
                { msg: 'Hotline_A', btn_title: 'Hotlines' },
            ]
        }
    ],
    corruption: [
        {
            name: 'corruption',
            title: 'Corruption',
            // text: '',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234201/rescue/24623509_1894219843926099_1412550792_o_n1opij.png',
            button: [
                {msg:'Report', btn_title: 'Report'},
                // {msg:'News', btn_title: 'Subscribe News'},
                // {msg:'Hotline', btn_title: 'Hotlines'},
            ]
        }
    ],
    calamity: [
        {
            name: 'typhoon',
            title: 'Flood/Typhoon',
            // text: '',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234180/rescue/Flood-01_ileqth.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips_T', btn_title: 'Safety Tips'},
                {msg:'Hotline_T', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'earthquake',
            title: 'Earthquake',
            // text: '',
             image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234171/rescue/24322162_1894219970592753_1334253143_o_lplc3g.png',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips_E', btn_title: 'Safety Tips'},
                {msg:'Hotline_E', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'fire',
            title: 'Fire',
            // text: '',
             image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234171/rescue/24322162_1894219970592753_1334253143_o_lplc3g.png',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips_F', btn_title: 'Safety Tips'},
                {msg:'Hotline_F', btn_title: 'Hotlines'},
            ]
        }
    ],
    accident: [
        {
            name: 'road',
            title: 'Road',
            // text: '',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234204/rescue/24323901_1894220170592733_1608231463_o_ohuwsj.png',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips_R', btn_title: 'Safety Tips'},
                {msg:'Hotline_R', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'health',
            title: 'Health',
            // text: '',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512249288/rescue/aid699163-v4-900px-Know-if-You_ve-Had-a-Heart-Attack-Step-1-Version-2.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips_H', btn_title: 'Safety Tips'},
                {msg:'Hotline_H', btn_title: 'Hotlines'},
            ]
        },
        {
            name: 'coast',
            title: 'Coast',
            // text: '',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512249226/rescue/aid1272248-v4-900px-Save-an-Active-Drowning-Victim-Step-9-Version-3.jpg',
            button: [
                {msg:'Report', btn_title: 'Report'},
                {msg:'Tips_C', btn_title: 'Safety Tips'},
                {msg:'Hotline_C', btn_title: 'Hotlines'},
            ]
        }
    ],
    areaofinterest: [
        {
            name: 'areaofinterest',
            //title: 'Corruption',
             text: 'Select Are of interest',
            image: 'http://res.cloudinary.com/chatbotph/image/upload/v1512234201/rescue/24623509_1894219843926099_1412550792_o_n1opij.png',
            button: [
                {msg:'fundraiser', btn_title: 'Fund Raiser'},
                {msg:'render', btn_title: 'Render Volunteer Service'},
                {msg:'medical', btn_title: 'Medical'},
                {msg:'dental', btn_title: 'Dental'},
                {msg:'others', btn_title: 'Others, please specify'},
                // {msg:'News', btn_title: 'Subscribe News'},
                // {msg:'Hotline', btn_title: 'Hotlines'},
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
    mr_button: { listStyle: builder.ListStyle.button, maxRetries: 0 },
    mr_inline: { listStyle: builder.ListStyle.inline, maxRetries: 0 },
    mr_list: { listStyle: builder.ListStyle.list, maxRetries: 0 },
    mr_auto: { listStyle: builder.ListStyle.auto, maxRetries: 0 },
    mr_none: { listStyle: builder.ListStyle.none, maxRetries: 0 }
}

module.exports.persistentMenu = {
    persistent_menu: [
        {
            locale: "default",
            // composer_input_disabled: false,
            call_to_actions: [
                {
                    title: "Emergency ‼",
                    type: "postback",
                    payload: "Emergency"
                },
                {
                    title: "Help Option",
                    type: "postback",
                    payload: "Help"
                },
                {
                    title: "Powered By Werpa Rangers 🤖",
                    type: "web_url",
                    url: "http://www.chatbot.ph/",
                    webview_height_ratio: "compact"
                },
            ]
        },
        {
            locale: "zh_CN",
            composer_input_disabled: false
        }
    ]
}