/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'identify';
    var subject = require('./' + testName + '.js');
    var path = require('path');

    var testData = [
        { expected: { file: path.join('sample', 'cat.flif'),    dimensions: '80x64',   color: '8-bit RGBA', interlace: 'non-interlaced', size: 103    }, arguments: path.join('.', 'sample', 'cat.flif')    },
        { expected: { file: path.join('sample', 'output.flif'), dimensions: '768x512', color: '8-bit RGB',  interlace: 'interlaced',     size: 475578 }, arguments: path.join('.', 'sample', 'output.flif') }
    ];

    for (var i = 0; i < testData.length; i++) {
        var arguments = testData[i].arguments;
        var expected = testData[i].expected;
        var actual = subject(arguments);

        for (var key in actual) {
            if (actual[key] !== expected[key]) {
                var errMsg = '\n' +
                    'TEST: ' + testName + '\n' +
                    'ERROR:\n' +
                    '  Iterator: ' + i + '\n' +
                    '  Key: ' + key + '\n' +
                    '  Actual: ' + actual[key] + '\n' +
                    '  Expected: ' + expected[key] + '\n' +
                    '  Arguments: ' + arguments;
                throw errMsg;
            }
        }
    }

    var amountOfTests = testData.length * Object.keys(testData[0].expected).length;

    return [testName, amountOfTests];
}

module.exports = test;
