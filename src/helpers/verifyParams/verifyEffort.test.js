/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyEffort';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for effort
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', effort: 0                       }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', effort: 0                       }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', effort: 1                       }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', effort: 1                       }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', effort: 50                      }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', effort: 50                      }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', effort: 100                     }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', effort: 100                     }, 'transcode', true]},

        // Test random number from 0-100 on effort
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', effort: rand(100)               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', effort: rand(100)               }, 'transcode', true]},

        // Test known bad for effort
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: 0                       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: 1                       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: 50                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: 100                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: rand(100)               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', effort: 101                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: 101                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', effort: 101                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', effort: -10                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: -10                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', effort: -10                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', effort: 22.2                    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: 22.2                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', effort: 22.2                    }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', effort: 'a'                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: 'a'                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', effort: 'a'                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', effort: [0, 1, 2]               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: [0, 1, 2]               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', effort: [0, 1, 2]               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', effort: {'a': 1}                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: {'a': 1}                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', effort: {'a': 1}                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', effort: null                    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: null                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', effort: null                    }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', effort: true                    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: true                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', effort: true                    }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', effort: false                   }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  effort: false                   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', effort: false                   }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
