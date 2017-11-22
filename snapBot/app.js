'use strict';
var FormData = require('form-data');
require('dotenv').config();

console.log('Hello world');
// SNAPCHAT BOT/CHAT ATTEMPT

// FILE SYSTEM: UPLOAD / DOWNLOAD SNAPS
var fs = require('fs');
// LODASH?

// BOT BACKEND ?


// npm snaps api test
var user = process.env.SNAPCHAT_USERNAME;
var pass = process.env.SNAPCHAT_PASSWORD;
var gmail = process.env.SNAPCHAT_GMAIL_EMAIL;
var gpass = process.env.SNAPCHAT_GMAIL_PASSWORD;

const login = require("facebook-chat-api");

// pushbullet
var PushBullet = require('pushbullet');
var pusher = new PushBullet('o.ilRCllIpKhxOMsNscbySEyv9GXzAzYNg');
var oldM9iden = "ufiSLkUsjAaL5PFydU";
var m9Viden = "ufiSLkUsjAncMCuELY";
var tcerSSiden = "ufiSLkUsjAq9WLSuVE";
var firefoxiden = "ufiSLkUsjz1NhW0p52";
// vars	
var typin = 0;
// snaps
var Snaps = require('snaps').Snaps;

// LOGIN AND LISTEN...

(new Snaps(user, pass)).then(function (snaps) {
    console.log(snaps.getFriends());
    var response = snaps.getSnaps();
    console.log(response);
    //var msgID# RETURNED...
    // assuming there is a snap to fetch...
    // 		will save the snap to FILE SYSTEM
    var IDNUM = '';
    for (var r = 0; r < response.length; r++) {
        var thisone = response[r];
        IDNUM = thisone.id;
        return snaps.fetchSnap(IDNUM).then(function (stream) {
            var output = new Buffer(0);
            stream.on('data', function (data) {
                output = Buffer.concat([output, data]);
            });
            stream.on('end', function () {
                var snapname = concat([IDNUM, '.jpg']);
                fs.writeFileSync(snapname, output);
            });
        }).catch(function (err) {
            // handle error 
        });
    }
});


function getFriends() {
    snaps.getFriends().then(function (stream) {
        var output = new Buffer(0);
        stream.on('data', function (data) {
            output = Buffer.concat([output, data]);
        });
        stream.on('end', function () {
            fs.writeFileSync('./friends.txt', output);
        });
    }).catch(function (err) {
        // handle error 
    });
    console.log(output);
}



function sendSnap(snapToSend) {
    var Snaps = require('snaps').Snaps;
    (new Snaps(user, pass)).then(function (snaps) {
        console.log(snaps.getFriends());
        /* ->
          {
            "name": "mileyxxcyrus",
            "displayName": "Miley",
            "canSeeCustomStories": true,
            "isPrivate": false
          },
          {
            "name": "canadiangoose",
            "displayName": "Justin",
            "canSeeCustomStories": true,
            "isPrivate": true
          }
         */
        var file = fs.createReadStream('/path/to/an/image.jpg');
        return snaps.send(file, ['mileyxxcyrus', 'canadiangoose'], 5);
    }).catch(function (err) {
        // handle error 
    });
}