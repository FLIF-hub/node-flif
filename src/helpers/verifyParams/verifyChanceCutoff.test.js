/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyChanceCutoff';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for chanceCutoff
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 1                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 1                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 2                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 2                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 128               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 128               }, 'transcode', true]},

        // Test random number from 1-128 on chanceCutoff
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: rand(127) + 1     }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: rand(127) + 1     }, 'transcode', true]},

        // Test known bad for chanceCutoff
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 1                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 2                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: rand(127) + 1     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 0                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 0                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 0                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 129               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 129               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 129               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: -10               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: -10               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: -10               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 22.2              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 22.2              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 22.2              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 'a'               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 'a'               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 'a'               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: [0, 1, 2]         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: [0, 1, 2]         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: [0, 1, 2]         }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: {'a': 1}          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: {'a': 1}          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: {'a': 1}          }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: null              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: null              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: null              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: true              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: true              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: true              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: false             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: false             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: false             }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
