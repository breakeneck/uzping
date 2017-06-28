/**
 * @file:
 * @author: Yuri Datsenko <yuri@hosteeva.com>
 * @date: 26.06.2017
 */

console.log( 'alive!' );

/*
import request from 'request';

const SEARCH_URL = 'http://booking.uz.gov.ua/purchase/search/';
//const STATION_URL = 'http://booking.uz.gov.ua/purchase/station/?term=';

let time = () => (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
    .toISOString().replace('T',' ').split('.').shift();
let ping = () => {
    request
        .post({
            url: SEARCH_URL,
            json: true,
            form: {
                // station_id_from: 2218060,
                station_from: 'Луцьк',
                // station_id_till: 2210700,
                station_till: 'Дніпропетровськ-Голов.',
                // station_id_till: 2200001,
                // station_till: 'Київ',
                date_dep: '12.07.2017',
                time_dep: '00:00',
                time_dep_till: '',
                another_ec:	0,
                search: ''
            }
        }, (error, response, body) => {
            if(!body || typeof body === 'string')
                return;

            if(typeof body.value === 'string')
                console.log(time() + ' - Nothing found');
            else
                body.value.forEach(value => {
                    let tickets = value.types.map(type => {
                        return type.places + ' ' + type.title;
                    }).join("\n");
                    let message = `${value.from.station} - ${value.till.station} (${value.till.src_date}) \n${tickets}`;
                    console.log(time() + ' - ' + message);
                });
        });
};


// let timer = setInterval(ping, 5 * 1000);



ping();
let timer = setInterval(ping, 5 * 60 * 1000);

const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env['TELEGRAM_BOT_TOKEN']);

let chatID = null;

// Register listeners
slimbot.on('message', message => {
    chatID = message.chat.id;
    slimbot.sendMessage(message.chat.id, message.text + chatID);
});

// Call API
slimbot.startPolling();


/*
const ViberBot  = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;

let message = new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`)
bot.sendMessage(userProfile, message);

const bot    = new ViberBot({
    authToken: YOUR_AUTH_TOKEN_HERE,
    name: "UzBot",
    // avatar: "http://viber.com/avatar.jpg" // It is recommended to be 720x720, and no more than 100kb.
});
*/

 // Perfect! Now here's the key part:
 // bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
 // // Echo's back the message to the client. Your bot logic should sit here.
 // response.send(message);
 // });
