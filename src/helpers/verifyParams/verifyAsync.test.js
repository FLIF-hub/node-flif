/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyAsync';
    var testData = [
        // Test known good for async
        { 'expected': true,  'arguments': [{ input: 'a.png',  output: 'a.flif', async: true      }, 'encode',    true] },
        { 'expected': true,  'arguments': [{ input: 'a.flif', output: 'a.png',  async: true      }, 'decode',    true] },
        { 'expected': true,  'arguments': [{ input: 'a.flif', output: 'a.flif', async: true      }, 'transcode', true] },
        { 'expected': true,  'arguments': [{ input: 'a.png',  output: 'a.flif', async: false     }, 'encode',    true] },
        { 'expected': true,  'arguments': [{ input: 'a.flif', output: 'a.png',  async: false     }, 'decode',    true] },
        { 'expected': true,  'arguments': [{ input: 'a.flif', output: 'a.flif', async: false     }, 'transcode', true] },

        // Test known bad for async
        { 'expected': false, 'arguments': [{ input: 'a.png',  output: 'a.flif', async: 'a'       }, 'encode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.png',  async: 'a'       }, 'decode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.flif', async: 'a'       }, 'transcode', true] },
        { 'expected': false, 'arguments': [{ input: 'a.png',  output: 'a.flif', async: [0, 1, 2] }, 'encode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.png',  async: [0, 1, 2] }, 'decode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.flif', async: [0, 1, 2] }, 'transcode', true] },
        { 'expected': false, 'arguments': [{ input: 'a.png',  output: 'a.flif', async: {'a': 1}  }, 'encode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.png',  async: {'a': 1}  }, 'decode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.flif', async: {'a': 1}  }, 'transcode', true] },
        { 'expected': false, 'arguments': [{ input: 'a.png',  output: 'a.flif', async: null      }, 'encode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.png',  async: null      }, 'decode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.flif', async: null      }, 'transcode', true] },
        { 'expected': false, 'arguments': [{ input: 'a.png',  output: 'a.flif', async: 8         }, 'encode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.png',  async: 8         }, 'decode',    true] },
        { 'expected': false, 'arguments': [{ input: 'a.flif', output: 'a.flif', async: 8         }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
