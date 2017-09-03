/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'identify';
    var path = require('path');
    var testData = [
        { expected: { file: '/mnt' + path.join(process.cwd(), 'sample', 'cat.flif'),    dimensions: '80x64',   color: '8-bit RGBA', interlace: 'non-interlaced', size: 103    }, arguments: ['"' + path.resolve('.', 'sample', 'cat.flif') + '"']    },
        { expected: { file: '/mnt' + path.join(process.cwd(), 'sample', 'output.flif'), dimensions: '768x512', color: '8-bit RGB',  interlace: 'interlaced',     size: 475578 }, arguments: ['"' + path.resolve('.', 'sample', 'output.flif') + '"'] }
    ];

    runAllTests(testName, 'information', testData);

    var amountOfTests = testData.length * Object.keys(testData[0].expected).length;
    return [testName, amountOfTests];
}

module.exports = test;
