/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyYcocg';
    var testData = [
        // Test known good for ycocg
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', ycocg: true                     }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', ycocg: true                     }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', ycocg: false                    }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', ycocg: false                    }, 'transcode', true]},

        // Test known bad for ycocg
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  ycocg: true                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  ycocg: false                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', ycocg: 'a'                      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  ycocg: 'a'                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', ycocg: 'a'                      }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', ycocg: [0, 1, 2]                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  ycocg: [0, 1, 2]                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', ycocg: [0, 1, 2]                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', ycocg: {'a': 1}                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  ycocg: {'a': 1}                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', ycocg: {'a': 1}                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', ycocg: null                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  ycocg: null                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', ycocg: null                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', ycocg: 8                        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  ycocg: 8                        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', ycocg: 8                        }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
