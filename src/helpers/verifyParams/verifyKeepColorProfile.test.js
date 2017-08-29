/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('./verifyParamsHelpers/loopOverParamsTests.js');
    var testName = 'verifyKeepColorProfile';
    var testData = [
        // Test known good for keepColorProfile
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepColorProfile: true      } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepColorProfile: false     } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepColorProfile: true      } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepColorProfile: false     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepColorProfile: true      } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepColorProfile: false     } },

        // Test known bad for keepColorProfile
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepColorProfile: 'a'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepColorProfile: 'a'       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepColorProfile: 'a'       } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepColorProfile: [0, 1, 2] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepColorProfile: [0, 1, 2] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepColorProfile: [0, 1, 2] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepColorProfile: {'a': 1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepColorProfile: {'a': 1}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepColorProfile: {'a': 1}  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepColorProfile: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepColorProfile: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepColorProfile: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepColorProfile: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepColorProfile: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepColorProfile: 8         } }
    ];

    runAllTests(testName, testData);

    return [testName, testData.length];
}

module.exports = test;
