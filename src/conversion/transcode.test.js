/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'transcode';
    var subject = require('./' + testName + '.js');

    var testData = [
        { 'params': '', 'expectation': '' }
    ];

    for (var i = 0; i < testData.length; i++) {
        var params = testData[i].params;
        var expectation = testData[i].expectation;
        var actual = subject(params);
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
