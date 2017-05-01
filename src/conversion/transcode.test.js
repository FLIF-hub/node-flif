/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'transcode';
    // var subject = require('./' + testName.toLowerCase() + '.js');

    var testData = [
        { 'actual': '', 'expectation': '' }
    ];

    for (var i = 0; i < testData.length; i++) {
        var actual = testData[i].actual;
        var expectation = testData[i].expectation;
        if (actual !== expectation) {
            var errMsg = '\n' +
                'TEST: ' + testName + '\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  Expected: ' + expectation + '\n' +
                '  Actual: ' + actual;
            throw errMsg;
        }
    }

    return [testName, testData.length];
}

module.exports = test;
