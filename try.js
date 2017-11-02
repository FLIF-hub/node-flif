// This file exists to test if flif-wasm works in Windows

var fs = require('fs');

// Delete old files from previous attempts
try { fs.unlinkSync('./sample/try-a.png');  } catch (err) {}
try { fs.unlinkSync('./sample/try-b.flif'); } catch (err) {}
try { fs.unlinkSync('./sample/try-c.png');  } catch (err) {}

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



// Should convert cat.flif to try-a.png
var decode = runCommandSync('-d ./sample/cat.flif ./sample/try-a.png');
console.log(decode);

// Log out true/false if file exists
console.log(fs.existsSync('./sample/try-a.png'));



// Should convert cat.png to try-b.flif
var encode = runCommandSync('-e ./sample/cat.png ./sample/try-b.flif');
console.log(encode);

// Log out true/false if file exists
console.log(fs.existsSync('./sample/try-b.flif'));



// Should convert try-b.flif to try-c.png
var decodeEncodedTry = runCommandSync('-d ./sample/try-b.flif ./sample/try-c.png');
console.log(decodeEncodedTry);

// Log out true/false if file exists
console.log(fs.existsSync('./sample/try-c.png'));
