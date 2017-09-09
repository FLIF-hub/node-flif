/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'runCommandSync';
    var subject = require('./' + testName + '.js');

    var testData = [
        { 'cmd': '-v', 'expectation': 'FLIF (Free Lossless Image Format) 0.3 [28 April 2017]' }
    ];

    for (var i = 0; i < testData.length; i++) {
        var cmd = testData[i].cmd;
        var expectation = testData[i].expectation;
        var actual = subject(cmd).trim();
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
