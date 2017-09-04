/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyScale';
    var testData = [
        // Test known good for scale
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 1           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 2           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 4           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 8           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 16          }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  scale: 32          }, 'decode',    true] },

        // Test known bad for scale
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: 3           }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: 22          }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: -10         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: 22.2        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: 'a'         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: [0, 1, 2]   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: {'a': 1}    }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: null        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: true        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  scale: false       }, 'decode',    true] }

        // TODO: Handle falses for encode/transcode
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
