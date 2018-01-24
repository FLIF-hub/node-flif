/* eslint-disable no-console */


var start = Date.now();

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
        require('./src/helpers/verifyParams/verifyDecodeQuality.test.js'),
        require('./src/helpers/verifyParams/verifyEncodeQuality.test.js'),
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
        require('./src/helpers/verifyParams/verifyManiacRepeats.test.js'),
        require('./src/helpers/verifyParams/verifyManiacThreshold.test.js'),
        require('./src/helpers/verifyParams/verifyManiacDivisor.test.js'),
        require('./src/helpers/verifyParams/verifyManiacMinSize.test.js'),
        require('./src/helpers/verifyParams/verifyChanceCutoff.test.js'),
        require('./src/helpers/verifyParams/verifyChanceAlpha.test.js'),
        require('./src/helpers/verifyParams/verifyAdaptive.test.js'),
        require('./src/helpers/verifyParams/verifyGuess.test.js'),
        require('./src/helpers/verifyParams/verifyAlphaGuess.test.js'),
        require('./src/helpers/verifyParams/verifyChromaSubsample.test.js')
    ],

    // Information
    require('./src/information/breakpoints.test.js'),
    require('./src/information/identify.test.js'),
    require('./src/information/version.test.js'),

    // Conversion
    require('./src/conversion/encode.test.js'), [
        require('./src/conversion/argumentGroups/commonEncodeDecode.test.js'),
        require('./src/conversion/argumentGroups/commonEncode.test.js'),
        require('./src/conversion/argumentGroups/advancedEncode.test.js'),
        require('./src/conversion/argumentGroups/commonDecode.test.js')
    ],
    require('./src/conversion/decode.test.js'),
    require('./src/conversion/transcode.test.js')
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

var expectedNumberOfTests = 1412;
if (numberOfTestsPassed !== expectedNumberOfTests) {
    var message =
        'Total number of tests has changed.\n\n' +
        ' Expected: ' + expectedNumberOfTests.toLocaleString() + '\n' +
        '   Actual: ' + numberOfTestsPassed.toLocaleString();
    throw message;
}


// //////////////////////////// //
//        OUTPUT RESULTS        //
// //////////////////////////// //

var end = Date.now();
var seconds = Math.round((end - start) / 100) / 10;
var testsPerSecond = Math.round((numberOfTestsPassed / seconds) * 10) / 10;

testsPerSecond = testsPerSecond.toLocaleString();
numberOfTestsPassed = numberOfTestsPassed.toLocaleString();
seconds = seconds.toLocaleString();

var output = '\n' +
    'Tested:\n' +
    testNames.join('\n') + '\n\n' +
    numberOfTestsPassed + ' Tests passed.\n' +
    'Took ' + seconds + ' seconds to run.\n' +
    'Which is ' + testsPerSecond + ' tests per second.';

console.log(output);
