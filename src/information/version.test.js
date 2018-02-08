/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'version';
    var testData = [
        { expected: { nodeFLIF: '1.0.0', flif: '0.3.0' }, arguments: ['']  }
    ];

    runAllTests(testName, 'information', testData);

    return [testName, testData.length];
}

module.exports = test;
