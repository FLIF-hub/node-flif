/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'disallowQuality';
    var testData = [
        // Throw error if quality is used instead of encodeQuality or decodeQuality
        { expected: false,  arguments: [ { input: 'a.png',  output: 'a.flif', quality: 100 }, 'encode',    true]},
        { expected: false,  arguments: [ { input: 'a.flif', output: 'a.png',  quality: 100 }, 'decode',    true]},
        { expected: false,  arguments: [ { input: 'a.flif', output: 'a.flif', quality: 100 }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
