/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('./verifyParamsHelpers/loopOverParamsTests.js');
    var testName = 'verifyAsync';
    var testData = [
        // Test known good for async
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', async: true      } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  async: true      } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', async: true      } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', async: false     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  async: false     } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', async: false     } },

        // Test known bad for async
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', async: 'a'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  async: 'a'       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', async: 'a'       } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', async: [0, 1, 2] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  async: [0, 1, 2] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', async: [0, 1, 2] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', async: {'a': 1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  async: {'a': 1}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', async: {'a': 1}  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', async: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  async: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', async: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', async: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  async: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', async: 8         } }
    ];

    runAllTests(testName, testData);

    return [testName, testData.length];
}

module.exports = test;
