/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'executablePath';
    var path = require('path');
    var testData = [
        { expected: 'node "' + path.resolve(process.cwd(), 'node_modules', 'flif-wasm', 'lib', 'flif-wasm.js') + '"', arguments: [] }
    ];
    if (process.platform === 'win32') {
        testData = [
            { expected: 'executables\\win32\\flif.exe', arguments: [] }
        ];
    }
    runAllTests(testName, 'helpers', testData);

    return [testName, testData.length];
}

module.exports = test;
