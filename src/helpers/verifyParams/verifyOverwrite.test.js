/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyOverwrite';
    var testData = [
        // Test known good for overwrite
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', overwrite: true      }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  overwrite: true      }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', overwrite: true      }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', overwrite: false     }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  overwrite: false     }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', overwrite: false     }, 'transcode', true] },

        // Test known bad for overwrite
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', overwrite: 'a'       }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  overwrite: 'a'       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', overwrite: 'a'       }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', overwrite: [0, 1, 2] }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  overwrite: [0, 1, 2] }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', overwrite: [0, 1, 2] }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', overwrite: {'a': 1}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  overwrite: {'a': 1}  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', overwrite: {'a': 1}  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', overwrite: null      }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  overwrite: null      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', overwrite: null      }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', overwrite: 8         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  overwrite: 8         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', overwrite: 8         }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
