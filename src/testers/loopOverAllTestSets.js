/**
 * Loop ever a set of test data to check if expectations match actual results
 *
 * @param  {string}  testName Name of the logic file we are testing
 * @param  {string}  folder   Relative path to the file
 * @param  {array}   testSet  Array of objects, each object contains an expectation and an arr
 */
function loopOverAllTestSets (testName, folder, testSet, async) {
    async = async || false;
    var path = require('path');
    var isEqual = require('lodash.isequal');

    var testFile = path.join('..', folder, testName + '.js');
    var subject = require(testFile);

    for (var i = 0; i < testSet.length; i++) {
        var arguments = testSet[i].arguments;
        if (!Array.isArray(arguments)) {
            throw 'Argument is not an array.';
        }
        var expected = testSet[i].expected;

        if (async) {
            // eslint-disable-next-line
            function cb (actual) {
                actual = actual.toString().trim();
                if (!isEqual(expected, actual)) {
                    var stack = (new Error()).stack.trim().split('\n');
                    var errorMessage = require('./errorMessage.js');
                    var errorDetails = {
                        stack: stack,
                        testName: testName,
                        i: i,
                        arguments: arguments,
                        expectation: expected,
                        actual: actual
                    };
                    var errMsg = errorMessage(errorDetails);

                    throw errMsg;
                }
            }
            arguments.push(cb);
            subject.apply(null, arguments);
        } else {
            var actual = subject.apply(null, arguments);

            if (!isEqual(expected, actual)) {
                var stack = (new Error()).stack.trim().split('\n');
                var errorMessage = require('./errorMessage.js');
                var errorDetails = {
                    stack: stack,
                    testName: testName,
                    i: i,
                    arguments: arguments,
                    expectation: expected,
                    actual: actual
                };
                var errMsg = errorMessage(errorDetails);

                throw errMsg;
            }
        }
    }
}

module.exports = loopOverAllTestSets;
