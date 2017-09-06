/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyMaxFrameLookBack';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for maxFrameLookBack
        // TODO: Find out upper bounds for maxFrameLookBack, all I know is it allows for the number 1
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: 1             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: 1             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: 2             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: 2             }, 'transcode', true]},

        // Test random number from 1-1024 on maxFrameLookBack
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: rand(1023) + 1}, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: rand(1023) + 1}, 'transcode', true]},

        // Test known bad for maxFrameLookBack
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: 1             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: rand(1023) + 1}, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: 0             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: 0             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: 0             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: -10           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: -10           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: -10           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: 22.2          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: 22.2          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: 22.2          }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: 'a'           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: 'a'           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: 'a'           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: [0, 1, 2]     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: [0, 1, 2]     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: [0, 1, 2]     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: {'a': 1}      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: {'a': 1}      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: {'a': 1}      }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: null          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: null          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: null          }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: true          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: true          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: true          }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxFrameLookBack: false         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxFrameLookBack: false         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxFrameLookBack: false         }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
