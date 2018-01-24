/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'verifyParams';
    var testData = [];

    runAllTests(testName, 'helpers', testData);

    return [testName, testData.length];
}

module.exports = test;
