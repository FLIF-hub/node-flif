/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('./verifyParamsHelpers/loopOverParamsTests.js');
    var testName = 'verifyKeepPalette';
    var testData = [
        // Test known good for keepPalette
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: true      } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: true      } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: true      } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: false     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: false     } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: false     } },

        // Test known bad for keepPalette
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: 'a'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: 'a'       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: 'a'       } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: [0, 1, 2] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: [0, 1, 2] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: [0, 1, 2] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: {'a': 1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: {'a': 1}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: {'a': 1}  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: 8         } }
    ];

    runAllTests(testName, testData);

    return [testName, testData.length];
}

module.exports = test;
