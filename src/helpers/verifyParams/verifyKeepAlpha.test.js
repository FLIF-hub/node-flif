/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyKeepAlpha';
    var testData = [
        // Test known good for keepAlpha
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', keepAlpha: true                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', keepAlpha: true                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', keepAlpha: false                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', keepAlpha: false                }, 'transcode', true]},

        // Test known bad for keepAlpha
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepAlpha: true                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepAlpha: false                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepAlpha: 'a'                  }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepAlpha: 'a'                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepAlpha: 'a'                  }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepAlpha: [0, 1, 2]            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepAlpha: [0, 1, 2]            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepAlpha: [0, 1, 2]            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepAlpha: {'a': 1}             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepAlpha: {'a': 1}             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepAlpha: {'a': 1}             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepAlpha: null                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepAlpha: null                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepAlpha: null                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', keepAlpha: 8                    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  keepAlpha: 8                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', keepAlpha: 8                    }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
