/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyKeepColorProfile';
    var testData = [
        // Test known good for keepColorProfile
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', keepColorProfile: true      }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', keepColorProfile: false     }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', keepColorProfile: true      }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', keepColorProfile: false     }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  keepColorProfile: true      }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  keepColorProfile: false     }, 'decode',    true] },

        // Test known bad for keepColorProfile
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepColorProfile: 'a'       }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepColorProfile: 'a'       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepColorProfile: 'a'       }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepColorProfile: [0, 1, 2] }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepColorProfile: [0, 1, 2] }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepColorProfile: [0, 1, 2] }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepColorProfile: {'a': 1}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepColorProfile: {'a': 1}  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepColorProfile: {'a': 1}  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepColorProfile: null      }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepColorProfile: null      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepColorProfile: null      }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepColorProfile: 8         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepColorProfile: 8         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepColorProfile: 8         }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
