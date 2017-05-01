/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'identify';
    var subject = require('./' + testName.toLowerCase() + '.js');
    var path = require('path');

    var catFLIF = path.join('.', 'sample', 'cat.flif');
    var outputFLIF = path.join('.', 'sample', 'output.flif');
    var catData = subject(catFLIF);
    var outputData = subject(outputFLIF);

    var testData = [
        { 'actual': catData.file,          'expectation': path.join('sample', 'cat.flif') },
        { 'actual': catData.dimensions,    'expectation': '80x64' },
        { 'actual': catData.color,         'expectation': '8-bit RGBA' },
        { 'actual': catData.interlace,     'expectation': 'non-interlaced' },
        { 'actual': catData.size,          'expectation': 103 },
        { 'actual': outputData.file,       'expectation': path.join('sample', 'output.flif') },
        { 'actual': outputData.dimensions, 'expectation': '768x512' },
        { 'actual': outputData.color,      'expectation': '8-bit RGB' },
        { 'actual': outputData.interlace,  'expectation': 'interlaced' },
        { 'actual': outputData.size,       'expectation': 475578 }
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
