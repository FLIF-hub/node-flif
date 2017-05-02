/* eslint-disable no-console */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */

// //////////////////////////// //
//       IMPORT ALL TESTS       //
// //////////////////////////// //

// Pull in all conversion tests:
var decode         = require('./src/conversion/decode.test.js');
var encode         = require('./src/conversion/encode.test.js');
var transcode      = require('./src/conversion/transcode.test.js');

// Pull in all helper tests
var endswith       = require('./src/helpers/endswith.test.js');
var executablePath = require('./src/helpers/executablePath.test.js');
var runCommand     = require('./src/helpers/runCommand.test.js');
var runCommandSync = require('./src/helpers/runCommandSync.test.js');
var verifyParams   = require('./src/helpers/verifyParams.test.js');

// Pull in all information tests
var breakpoints    = require('./src/information/breakpoints.test.js');
var identify       = require('./src/information/identify.test.js');
var version        = require('./src/information/version.test.js');


// //////////////////////////// //
//      WHAT SHOULD BE RAN      //
// //////////////////////////// //

// As these are finished, move them down to the allTestsToRun array.
var unfinishedTests = [
    decode,
    encode,
    transcode,
    breakpoints
];

// List all tests to be ran in order
var allTestsToRun = [
    endswith,
    executablePath,
    identify,
    runCommand,
    runCommandSync,
    verifyParams,
    version
];



// //////////////////////////// //
//        PERFORM TESTS         //
// //////////////////////////// //

// Run all tests
var results = 0;
var testNames = [];

allTestsToRun.forEach(function (test) {
    if (typeof(test) !== 'function') {
        var errMsg = '\n' +
            'ERROR: \n' +
            'Test: ' + test;
        throw errMsg;
    }

    var result = test();
    testNames.push(result[0]);
    results = results + result[1];
});

var output = results + ' ' +
    'Tests passed.\n\n' +
    'Tested:\n * ' +
    testNames.join('\n * ');

console.log(output);
