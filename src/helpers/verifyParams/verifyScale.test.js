/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('./verifyParamsHelpers/loopOverParamsTests.js');
    var testName = 'verifyScale';
    var testData = [
        // Test known good for scale
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 1           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 2           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 4           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 8           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 16          } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 32          } },

        // Test known bad for scale
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 3           } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 22          } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: -10         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 22.2        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 'a'         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: [0, 1, 2]   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: {'a': 1}    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: null        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: true        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: false       } }

        // TODO: What about encode and transcode
    ];

    runAllTests(testName, testData);

    return [testName, testData.length];
}

module.exports = test;
