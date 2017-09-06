/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyFrameShape';
    var testData = [
        // Test known good for frameShape
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameShape: true                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameShape: true                }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameShape: false               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameShape: false               }, 'transcode', true]},

        // Test known bad for frameShape
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameShape: true                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameShape: false               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameShape: 'a'                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameShape: 'a'                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameShape: 'a'                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameShape: [0, 1, 2]           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameShape: [0, 1, 2]           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameShape: [0, 1, 2]           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameShape: {'a': 1}            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameShape: {'a': 1}            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameShape: {'a': 1}            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameShape: null                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameShape: null                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameShape: null                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameShape: 8                   }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameShape: 8                   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameShape: 8                   }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
