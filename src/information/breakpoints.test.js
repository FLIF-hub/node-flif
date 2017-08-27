/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'breakpoints';
    var subject = require('./' + testName + '.js');
    var path = require('path');

    var catFLIF = path.join('.', 'sample', 'cat.flif');
    var outputFLIF = path.join('.', 'sample', 'output.flif');
    var catData = subject(catFLIF);
    var outputData = subject(outputFLIF);

    var testData = [
        { 'actual': JSON.stringify(catData), 'expectation': JSON.stringify({}) },
        { 'actual': outputData.offsetStart,  'expectation': 11                 },
        { 'actual': outputData.eighth,       'expectation': 8080               },
        { 'actual': outputData.fourth,       'expectation': 24900              },
        { 'actual': outputData.half,         'expectation': 90422              }
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
