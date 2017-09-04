/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyKeepMetaData';
    var testData = [
        // Test known good for keepMetaData
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', keepMetaData: true      }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  keepMetaData: true      }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', keepMetaData: true      }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', keepMetaData: false     }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  keepMetaData: false     }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', keepMetaData: false     }, 'transcode', true] },

        // Test known bad for keepMetaData
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepMetaData: 'a'       }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepMetaData: 'a'       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepMetaData: 'a'       }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepMetaData: [0, 1, 2] }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepMetaData: [0, 1, 2] }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepMetaData: [0, 1, 2] }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepMetaData: {'a': 1}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepMetaData: {'a': 1}  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepMetaData: {'a': 1}  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepMetaData: null      }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepMetaData: null      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepMetaData: null      }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepMetaData: 8         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepMetaData: 8         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepMetaData: 8         }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
