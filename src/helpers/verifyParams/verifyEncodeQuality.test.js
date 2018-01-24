/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyEncodeQuality';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for encodeQuality
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 0           }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 0           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 1           }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 1           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 50          }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 50          }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 100         }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 100         }, 'transcode', true] },

        // Test random number from 0-100 on encodeQuality
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: rand(100)   }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: rand(100)   }, 'transcode', true] },

        // Test known bad for encodeQuality
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 0           }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 1           }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 50          }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 100         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: rand(100)   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 101         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 101         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 101         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: -10         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: -10         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: -10         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 22.2        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 22.2        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 22.2        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 'a'         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 'a'         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 'a'         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: [0, 1, 2]   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: [0, 1, 2]   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: [0, 1, 2]   }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: {'a': 1}    }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: {'a': 1}    }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: {'a': 1}    }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: null        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: null        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: null        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: true        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: true        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: true        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: false       }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: false       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: false       }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
