/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'ensureParamsExist';
    var testData = [
        // Test if params exist
        { expected: false, arguments: [ undefined,                             'encode',    true]},
        { expected: false, arguments: [ null,                                  'encode',    true]},
        { expected: false, arguments: [ true,                                  'encode',    true]},
        { expected: false, arguments: [ false,                                 'encode',    true]},
        { expected: false, arguments: [ 8,                                     'encode',    true]},
        { expected: false, arguments: [ '',                                    'encode',    true]},
        { expected: false, arguments: [ [],                                    'encode',    true]},
        { expected: false, arguments: [ {},                                    'encode',    true]},

        // Test if src exists
        { expected: false, arguments: [ { input: 'a.png',  output: 'a.flif' }, undefined,   true]},
        { expected: false, arguments: [ { input: 'a.png',  output: 'a.flif' }, null,        true]},
        { expected: false, arguments: [ { input: 'a.png',  output: 'a.flif' }, true,        true]},
        { expected: false, arguments: [ { input: 'a.png',  output: 'a.flif' }, false,       true]},
        { expected: false, arguments: [ { input: 'a.png',  output: 'a.flif' }, 8,           true]},
        { expected: false, arguments: [ { input: 'a.png',  output: 'a.flif' }, '',          true]},
        { expected: false, arguments: [ { input: 'a.png',  output: 'a.flif' }, [],          true]},
        { expected: false, arguments: [ { input: 'a.png',  output: 'a.flif' }, {},          true]},

        // Known good
        { expected: true,  arguments: [ { input: 'a.png',  output: 'a.flif' }, 'encode',    true]},
        { expected: true,  arguments: [ { input: 'a.flif', output: 'a.png'  }, 'decode',    true]},
        { expected: true,  arguments: [ { input: 'a.flif', output: 'a.flif' }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
