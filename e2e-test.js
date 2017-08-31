/* eslint-disable no-console */

var nodeFLIF = require('./index.js');


// Test converting 1 flif to 1 png

var decodeParams = {
    input: './sample/cat.flif',
    output: './sample/decode-test.png',
    overwrite: true
};

nodeFLIF.decode(decodeParams, function (data) {
    console.log('Decode cat.flif -> decode-test.png finished');
    if (data) {
        console.log(data);
    }
});


// Test converting 1 png to 1 flif

var encodeParams = {
    input: './sample/cat.png',
    output: './sample/encode-test.flif',
    overwrite: true,
    async: false
};

console.log(nodeFLIF.encode(encodeParams));
console.log('Encode cat.png -> encode-test.flif finished.');


// Verify the above flif was created properly by decoding to png

var decodeParams2 = {
    input: './sample/encode-test.flif',
    output: './sample/decode-encode-test.png',
    overwrite: true
};

nodeFLIF.decode(decodeParams2, function (data) {
    console.log('Decode encode-test.flif -> decode-encode-test.png finished');
    if (data) {
        console.log(data);
    }
});


// Identify data in a flif

var catData = nodeFLIF.identify('./sample/cat.flif');
console.log(catData);
console.log('Identified cat.flif');


// Create an animated flif

// TODO: allow passing an array as input
/*
var encodeAnimParams = {
    input: [
        './sample/catrun01.png',
        './sample/catrun02.png',
        './sample/catrun03.png',
        './sample/catrun04.png',
        './sample/catrun05.png',
        './sample/catrun06.png'
    ],
    output: './sample/encode-anim-test.flif',
    overwrite: true
};

nodeFLIF.encode(encodeAnimParams, function (data) {
    console.log('Encod catrun01-06.png -> encode-anim-test.flif finished.');
    if (data) {
        console.log(data);
    }
});
*/
