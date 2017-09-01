/**
 * Loop ever a set of test data to check if expectations match actual results
 *
 * @param  {string}  testName Name of the logic file we are testing
 * @param  {string}  folder   Path to the file
 * @param  {array}   testSet  Array of objects, each object contains an expectation and an arr
 * @return {boolean}          Throw if we detect a failure, otherwise return true
 */
function loopOverAllTestSets (testName, folder, testSet) {
    var subject = require('../' + folder + '/' + testName + '.js');

    for (var i = 0; i < testSet.length; i++) {
        var arguments = testSet[i].arguments;
        var expected = testSet[i].expected;
        var actual = subject.apply(null, arguments);

        // If we expect to generate an Object, compare the insides of the object.
        if (typeof(expected) === 'object' && !Array.isArray(expected)) {
            // TODO: Make this recursive so it can handle objects in objects in objects
            for (var key in actual) {
                if (actual[key] !== expected[key]) {
                    throw 'fail';
                }
            }
        } else {
            // TODO: use the errorMessage.js file for the throw
            if (actual[key] !== expected[key]) {
                throw 'fail';
            }
        }
    }

    return true;
}

module.exports = loopOverAllTestSets;
