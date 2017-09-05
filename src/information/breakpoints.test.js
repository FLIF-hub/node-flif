/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'breakpoints';
    var path = require('path');
    var testData = [
        { expected: {}, arguments: [path.join('.', 'sample', 'cat.flif')] },
        { expected: {
            offsetStart: 11,
            eighth: 8080,
            fourth: 24900,
            half: 90422
        }, arguments: [path.join('.', 'sample', 'output.flif')] }
    ];

    runAllTests(testName, 'information', testData);

    return [testName, testData.length];
}

module.exports = test;
