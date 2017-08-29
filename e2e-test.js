var nodeFLIF = require('./index.js');

var decodeParams = {
    input: './sample/cat.flif',
    output: './sample/decode-test.png',
    overwrite: true
};

nodeFLIF.decode(decodeParams, function (data) {
    console.log('Decode finished');
    if (data) {
        console.log(data);
    }
});

var encodeParams = {
    input: './sample/cat.png',
    output: './sample/encode-test.flif',
    overwrite: true
}

nodeFLIF.encode(encodeParams, function (data) {
    console.log('Encode finished.');
    if (data) {
        console.log(data);
    }
})

console.log(nodeFLIF.identify('./sample/cat.flif'));

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
    console.log('Encode animation finished.');
    if (data) {
        console.log(data);
    }
})
