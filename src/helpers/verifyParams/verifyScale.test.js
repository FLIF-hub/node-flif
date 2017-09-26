/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyScale';
    var testData = [
        // Test known good for scale
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 1           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', scale: 1           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 2           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', scale: 2           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 4           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', scale: 4           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 8           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', scale: 8           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 16          }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', scale: 16          }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 32          }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', scale: 32          }, 'transcode', true] },

        // Test known bad for scale
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 1           }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 2           }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 4           }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 8           }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 16          }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 32          }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: 3           }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: 3           }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 3           }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: 22          }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: 22          }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 22          }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: -10         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: -10         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: -10         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: 22.2        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: 22.2        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 22.2        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: 'a'         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: 'a'         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: 'a'         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: [0, 1, 2]   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: [0, 1, 2]   }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: [0, 1, 2]   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: {'a': 1}    }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: {'a': 1}    }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: {'a': 1}    }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: null        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: null        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: null        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: true        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: true        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: true        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: false       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', scale: false       }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', scale: false       }, 'encode',    true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
