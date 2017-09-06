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
    require('./src/helpers/verifyParams.test.js'), [
        require('./src/helpers/verifyParams/ensureParamsExist.test.js'),
        require('./src/helpers/verifyParams/ensureInputOutputExist.test.js'),
        require('./src/helpers/verifyParams/verifyAsync.test.js'),
        require('./src/helpers/verifyParams/verifyOverwrite.test.js'),
        require('./src/helpers/verifyParams/verifyQuality.test.js'),
        require('./src/helpers/verifyParams/verifyKeepMetaData.test.js'),
        require('./src/helpers/verifyParams/verifyKeepColorProfile.test.js'),
        require('./src/helpers/verifyParams/verifyCRC.test.js'),
        require('./src/helpers/verifyParams/verifyKeepPalette.test.js'),
        require('./src/helpers/verifyParams/verifyScale.test.js'),
        require('./src/helpers/verifyParams/verifyResize.test.js'),
        require('./src/helpers/verifyParams/verifyFit.test.js'),
        require('./src/helpers/verifyParams/verifyEffort.test.js'),
        require('./src/helpers/verifyParams/verifyInterlace.test.js'),
        require('./src/helpers/verifyParams/verifyKeepAlpha.test.js'),
        require('./src/helpers/verifyParams/verifyFrameDelay.test.js'),
        require('./src/helpers/verifyParams/verifyMaxPaletteSize.test.js'),
        require('./src/helpers/verifyParams/verifyColorBuckets.test.js'),
        require('./src/helpers/verifyParams/verifyChannelCompact.test.js'),
        require('./src/helpers/verifyParams/verifyYcocg.test.js'),
        require('./src/helpers/verifyParams/verifySubtractGreen.test.js'),
        require('./src/helpers/verifyParams/verifyFrameShape.test.js'),
        require('./src/helpers/verifyParams/verifyMaxFrameLookBack.test.js'),

        require('./src/helpers/verifyParams/verifyChromaSubsample.test.js')
    ],

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

/**
 * Recursive function to loop over all tests and subtests and run them
 * @param  {array}   testsArray  Array of test functions and subArrays of test functions
 * @param  {string}  sub         number of spaces for the output report later
 */
function runTests (testsArray, sub) {
    sub = sub || '';
    testsArray.forEach(function (test) {
        if (Array.isArray(test)) {
            runTests(test, sub + ' ');
        } else if (typeof(test) !== 'function') {
            var errMsg = '\n' +
                'ERROR: \n' +
                'Test: ' + test;
            throw errMsg;
        } else {
            var result = test();
            var testName = result[0];
            var amountOfTestsRan = result[1];
            testNames.push(sub + ' ∙ ' + testName);
            numberOfTestsPassed = numberOfTestsPassed + amountOfTestsRan;
        }
    });
}
runTests(allTestsToRun);

// TODO: Remove this line after you are done splitting up the verifyParams to modules
if (numberOfTestsPassed !== 1134) { throw ' You forgot to import a subtest during refactoring'; }


// //////////////////////////// //
//        OUTPUT RESULTS        //
// //////////////////////////// //

var output =
    numberOfTestsPassed + ' Tests passed.\n\n' +
    'Tested:\n' +
    testNames.join('\n');

console.log(output);
