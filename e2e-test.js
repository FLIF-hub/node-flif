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

console.log(nodeFLIF.identify('./sample/cat.flif'));
