/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyKeepPalette';
    var testData = [
        // Test known good for keepPalette
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', keepPalette: true      }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  keepPalette: true      }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', keepPalette: true      }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', keepPalette: false     }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  keepPalette: false     }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', keepPalette: false     }, 'transcode', true] },

        // Test known bad for keepPalette
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepPalette: 'a'       }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepPalette: 'a'       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepPalette: 'a'       }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepPalette: [0, 1, 2] }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepPalette: [0, 1, 2] }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepPalette: [0, 1, 2] }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepPalette: {'a': 1}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepPalette: {'a': 1}  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepPalette: {'a': 1}  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepPalette: null      }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepPalette: null      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepPalette: null      }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepPalette: 8         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepPalette: 8         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepPalette: 8         }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
