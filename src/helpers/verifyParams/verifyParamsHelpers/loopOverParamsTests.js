/**
 * Loop over the test data for any verifyParameter test. If a test does not
 * meet the expectaion an error is thrown and all testing stops.
 *
 * @param  {string} testName  Name of the provided test to import the associate file
 * @param  {array}  testData  The array of objects with the test criteria and expectations
 */
function loopOverParamsTests (testName, testData) {
    var subject = require('../' + testName + '.js');

    for (var i = 0; i < testData.length; i++) {
        var param = testData[i].param;
        var src = testData[i].src;
        var actual = subject(param, src, true);
        var expectation = testData[i].expect;

        if (actual !== expectation) {
            var stack = (new Error()).stack.trim().split('\n');
            var errorMessage = require('./errorMessage.js');
            var errorDetails = {
                stack: stack,
                testName: testName,
                i: i,
                src: src,
                param: param,
                expectation: expectation,
                actual: actual
            };
            var errMsg = errorMessage(errorDetails);

            throw errMsg;
        }
    }
}

module.exports = loopOverParamsTests;
