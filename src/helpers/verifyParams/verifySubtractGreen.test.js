/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifySubtractGreen';
    var testData = [
        // Test known good for subtractGreen
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', subtractGreen: true             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', subtractGreen: true             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', subtractGreen: false            }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', subtractGreen: false            }, 'transcode', true]},

        // Test known bad for subtractGreen
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  subtractGreen: true             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  subtractGreen: false            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', subtractGreen: 'a'              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  subtractGreen: 'a'              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', subtractGreen: 'a'              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', subtractGreen: [0, 1, 2]        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  subtractGreen: [0, 1, 2]        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', subtractGreen: [0, 1, 2]        }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', subtractGreen: {'a': 1}         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  subtractGreen: {'a': 1}         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', subtractGreen: {'a': 1}         }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', subtractGreen: null             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  subtractGreen: null             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', subtractGreen: null             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', subtractGreen: 8                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  subtractGreen: 8                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', subtractGreen: 8                }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
