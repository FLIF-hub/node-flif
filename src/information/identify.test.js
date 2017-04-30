/* eslint-disable no-multi-spaces */

function testIdentify () {
    var identify = require('./identify.js');
    var path = require('path');

    var catFLIF = path.join('.', 'sample', 'cat.flif');
    var outputFLIF = path.join('.', 'sample', 'output.flif');
    var catData = identify(catFLIF);
    var outputData = identify(outputFLIF);

    var testData = [
        { 'item': catData.file,          'expectation': path.join('sample', 'cat.flif') },
        { 'item': catData.dimensions,    'expectation': '80x64' },
        { 'item': catData.color,         'expectation': '8-bit RGBA' },
        { 'item': catData.interlace,     'expectation': 'non-interlaced' },
        { 'item': catData.size,          'expectation': 103 },
        { 'item': outputData.file,       'expectation': path.join('sample', 'output.flif') },
        { 'item': outputData.dimensions, 'expectation': '768x512' },
        { 'item': outputData.color,      'expectation': '8-bit RGB' },
        { 'item': outputData.interlace,  'expectation': 'interlaced' },
        { 'item': outputData.size,       'expectation': 475578 }
    ];

    for (var i = 0; i < testData.length; i++) {
        var currentItem = testData[i].item;
        var expectation = testData[i].expectation;
        if (currentItem !== expectation) {
            var errMsg = '\n' +
                'ERROR: \n' +
                'Iterator: ' + i + '\n' +
                'Expected: ' + expectation + '\n' +
                'Actual: ' + currentItem;
            throw errMsg;
        }
    }
}

module.exports = testIdentify;
