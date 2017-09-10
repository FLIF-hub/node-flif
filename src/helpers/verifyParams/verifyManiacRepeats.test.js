/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyManiacRepeats';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for maniacRepeats
        // TODO: Find out upper bounds for maniacRepeats, all I know is it allows for the number 2
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: 1                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: 1                }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: 2                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: 2                }, 'transcode', true]},

        // Test random number from 1-1024 on maniacRepeats
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: rand(1023) + 1   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: rand(1023) + 1   }, 'transcode', true]},

        // Test known bad for maniacRepeats
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: 1                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: 2                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: rand(1023) + 1   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: 0                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: 0                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: 0                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: -10              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: -10              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: -10              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: 22.2             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: 22.2             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: 22.2             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: 'a'              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: 'a'              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: 'a'              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: [0, 1, 2]        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: [0, 1, 2]        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: [0, 1, 2]        }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: {'a': 1}         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: {'a': 1}         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: {'a': 1}         }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: null             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: null             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: null             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: true             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: true             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: true             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacRepeats: false            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacRepeats: false            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacRepeats: false            }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
