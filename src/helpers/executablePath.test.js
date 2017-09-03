/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'executablePath';
    var path = require('path');
    var testData = [
        { 'expected': path.resolve(process.cwd(), './node_modules/.bin/flif-wasm'), 'arguments': [] }
    ];

    runAllTests(testName, 'helpers', testData);

    return [testName, testData.length];
}

module.exports = test;
