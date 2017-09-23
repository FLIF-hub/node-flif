/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'transcode';
    var testData = [
        // Individual Params
        { expected: false,                         arguments: [{input:'a.png',  output:'b.flif'                                }] },
        { expected: false,                         arguments: [{input:'a.flif', output:'b.png'                                 }] },
        { expected: '-t "a.flif" "b.flif"',        arguments: [{input:'a.flif', output:'b.flif'                                }] },
        { expected: '-t "a.flif" "b.flif"',        arguments: [{input:'a.flif', output:'b.flif', async: true                   }] },
        { expected: '-t "a.flif" "b.flif"',        arguments: [{input:'a.flif', output:'b.flif', async: false                  }] }
    ];

    runAllTests(testName, 'conversion', testData);

    return [testName, testData.length];
}

module.exports = test;
