const moment = require('moment');
const http = require('http');
const randString = require('randomstring');
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const port = 8888;

function showDate() {
    return moment(new Date()).format('MMMM Do YYYY, h:mm a');
}

function generate(arg) {
    return randString.generate(arg);
}

function generatePassword() {
    let num = randString.generate({ length: 1, charset: 'numeric' });
    let extraChar = num <= 5 ? '?' : '!';
    let l1 = num < 3 ? num == 3 ? 4 : 3 : 5;
    let l2 = num > 5 && l1 > 3 ? num > 7 ? num == 9 ? 4 : 3 : 2 : 5
    return generate({ length: l1, charset: chars }) + extraChar + generate({ length: l2, charset: 'numeric' });
}

function startServer() {
    console.log(`Open a web browser and navigate to localhost on port ${port}`);
    let msg = showDate();
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<meta http-equiv="refresh" content="12"/>');
        res.write("<title>2FA Passcode Generator</title>");
        res.write("<section style='font-family: Montserrat, sans-serif; text-align: center; margin-top: 35vh;'> <h1>2FA random password generator</h1><h3>" + msg + "</h3>" + '<br>');
        res.write('<strong>Your password*</strong><br> <p style="background-color: powderblue; width: 10vw; margin-left: 45%;">' + generatePassword() + '</p><br>');
        res.write("<p style='font-size: 12px;'><em><br><br><br><br>*Password valid for 12 seconds, or until refresh.</em></p></section>");
        res.end();
    }).listen(port)
}

exports.startServer = startServer;