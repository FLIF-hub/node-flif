/* eslint-disable no-console */



// //////////////////////////// //
//      WHAT SHOULD BE RAN      //
// //////////////////////////// //

// List of all tests to be ran in order
var allTestsToRun = [
    // Helpers
    require('./src/helpers/executablePath.test.js'),
    require('./src/helpers/runCommand.test.js'),
    require('./src/helpers/runCommandSync.test.js'),
    require('./src/helpers/warnUser.test.js'),
    require('./src/helpers/verifyParams/ensureParamsExist.test.js'),
    require('./src/helpers/verifyParams.test.js'),

    // Information
    require('./src/information/breakpoints.test.js'),
    require('./src/information/identify.test.js'),
    require('./src/information/version.test.js'),

    // Conversion
    require('./src/conversion/decode.test.js'),
    require('./src/conversion/encode.test.js')
    // require('./src/conversion/transcode.test.js')
];



// //////////////////////////// //
//        PERFORM TESTS         //
// //////////////////////////// //

// Run all tests
var numberOfTestsPassed = 0;
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
    numberOfTestsPassed = numberOfTestsPassed + result[1];
});



// //////////////////////////// //
//        OUTPUT RESULTS        //
// //////////////////////////// //

var output =
    numberOfTestsPassed + ' Tests passed.\n\n' +
    'Tested:\n' +
    ' ∙ ' + testNames.join('\n ∙ ');

console.log(output);
