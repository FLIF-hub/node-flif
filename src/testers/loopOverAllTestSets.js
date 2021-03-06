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
    var assert = require('assert');

    var testFile = path.join('..', folder, testName + '.js');
    var subject = require(testFile);

    for (var i = 0; i < testSet.length; i++) {
        var args = testSet[i].arguments;
        var skipWarnings = true;
        if (!Array.isArray(args)) {
            throw 'Argument is not an array.';
        }
        var expected = testSet[i].expected;

        if (async) {
            // eslint-disable-next-line
            function cb (actual) {
                actual = actual.toString().trim();

                var isEqual = true;
                try {
                    assert.deepStrictEqual(expected, actual);
                } catch (err) {
                    isEqual = false;
                }

                if (!isEqual) {
                    var stack = (new Error()).stack.trim().split('\n');
                    var errorMessageGenerator = require('./errorMessage.js');
                    var errorDetails = {
                        stack: stack,
                        testName: testName,
                        i: i,
                        arguments: args,
                        expectation: expected,
                        actual: actual
                    };
                    var errorMessage = errorMessageGenerator(errorDetails);

                    throw errorMessage;
                }
            }
            args.push(cb);
            args.push(skipWarnings);
            subject.apply(null, args);
        } else {
            args.push(skipWarnings);
            var actual = subject.apply(null, args);

            var isEqual = true;
            try {
                assert.deepStrictEqual(expected, actual);
            } catch (err) {
                isEqual = false;
            }

            if (!isEqual) {
                var stack = (new Error()).stack.trim().split('\n');
                var errorMessageGenerator = require('./errorMessage.js');
                var errorDetails = {
                    stack: stack,
                    testName: testName,
                    i: i,
                    arguments: args,
                    expectation: expected,
                    actual: actual
                };
                var errorMessage = errorMessageGenerator(errorDetails);

                throw errorMessage;
            }
        }
    }
}

module.exports = loopOverAllTestSets;
