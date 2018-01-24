/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyDecodeQuality';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for decodeQuality
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: 0           }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: 0           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: 0           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: 1           }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: 1           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: 1           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: 50          }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: 50          }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: 50          }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: 100         }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: 100         }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: 100         }, 'transcode', true] },

        // Test random number from 0-100 on decodeQuality
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: rand(100)   }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: rand(100)   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: rand(100)   }, 'transcode', true] },

        // Test known bad for decodeQuality
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: 101         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: 101         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: 101         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: -10         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: -10         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: -10         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: 22.2        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: 22.2        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: 22.2        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: 'a'         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: 'a'         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: 'a'         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: [0, 1, 2]   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: [0, 1, 2]   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: [0, 1, 2]   }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: {'a': 1}    }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: {'a': 1}    }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: {'a': 1}    }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: null        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: null        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: null        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: true        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: true        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: true        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', decodeQuality: false       }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  decodeQuality: false       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', decodeQuality: false       }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
