/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyGuess';
    var testData = [
        // Test known good for guess
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'heuristically'          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'heuristically'          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'average'                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'average'                }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'median gradient'        }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'median gradient'        }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'median number'          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'median number'          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'mixed'                  }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'mixed'                  }, 'transcode', true]},

        // Test known bad for guess
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'heuristically'          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'average'                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'median gradient'        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'median number'          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'mixed'                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: true                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: true                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: true                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: false                    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: false                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: false                    }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'a'                      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'a'                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'a'                      }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: [0, 1, 2]                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: [0, 1, 2]                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: [0, 1, 2]                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: {'a': 1}                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: {'a': 1}                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: {'a': 1}                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: null                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: null                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: null                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: 8                        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 8                        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: 8                        }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
