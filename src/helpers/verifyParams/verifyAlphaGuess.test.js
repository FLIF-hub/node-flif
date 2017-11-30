/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyAlphaGuess';
    var testData = [
        // Test known good for alphaGuess
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'average'           }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'average'           }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'median gradient'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'median gradient'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'median neighbors'  }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'median neighbors'  }, 'transcode', true]},

        // Test known bad for alphaGuess
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'average'           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'median gradient'   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'median neighbors'  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'heuristically'     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'heuristically'     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'heuristically'     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'median number'     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'median number'     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'median number'     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'mixed'             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'mixed'             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'mixed'             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: true                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: true                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: true                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: false               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: false               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: false               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'a'                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'a'                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'a'                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: [0, 1, 2]           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: [0, 1, 2]           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: [0, 1, 2]           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: {'a': 1}            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: {'a': 1}            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: {'a': 1}            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: null                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: null                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: null                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 8                   }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 8                   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 8                   }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
