// This file exists to check the limits of arguments

var fs = require('fs');
var nodeFLIF = require('./index.js');

function runCommandSync (args) {
    var exec = require('child_process').execSync;
    var wasmPath = require.resolve('flif-wasm');
    var executable = 'node "' + wasmPath + '"';

    if (process.platform === 'win32') {
        executable = nodeFLIF.executablePath();
    }

    var executableAndArgs = executable + ' ' + args;
    var child = exec(executableAndArgs);

    return child.toString().trim();
}

function openImage (args) {
    var exec = require('child_process').execSync;
    exec(args);
}

try { fs.unlinkSync('./sample/check.flif'); } catch (err) {}
try { fs.unlinkSync('./sample/check.png'); } catch (err) {}

// Should return flif.exe version
var version = runCommandSync('-v');
console.log(version);

// Should convert cat.png to check.flif
var encode = runCommandSync('-e -D-1 ./sample/cat.png ./sample/check.flif');
console.log(encode);

// good
// D1 D100000000 D268435455
// bad
// D0 D1000000000 D268435456 D-1
// https://github.com/FLIF-hub/FLIF/blob/v0.3/src/flif.cpp#L580

// Log out true/false if file exists
console.log(fs.existsSync('./sample/check.flif'));


// Should convert cat.flif to check.png
var decode = runCommandSync('-d ./sample/check.flif ./sample/check.png');
console.log(decode);

// Log out true/false if file exists
console.log(fs.existsSync('./sample/check.png'));

openImage('sample\\check.png');


