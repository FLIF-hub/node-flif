// This file exists to test if flif-wasm works in Windows

var fs = require('fs');

function runCommandSync (args) {
    var exec = require('child_process').execSync;
    var wasmPath = require.resolve('flif-wasm');
    var executable = 'node "' + wasmPath + '"';

    var executableAndArgs = executable + ' ' + args;
    var child = exec(executableAndArgs);

    return child.toString().trim();
}



// Should return flif.exe version
var version = runCommandSync('-v');
console.log(version);



// Should convert cat.flif to try.png
var decode = runCommandSync('-d ./sample/cat.flif ./sample/try.png');
console.log(decode);

// Log out true/false if file exists
console.log(fs.existsSync('./sample/try.png'));



// Should convert cat.png to try.flif
var encode = runCommandSync('-e ./sample/cat.png ./sample/try.flif');
console.log(encode);

// Log out true/false if file exists
console.log(fs.existsSync('./sample/try.flif'));
