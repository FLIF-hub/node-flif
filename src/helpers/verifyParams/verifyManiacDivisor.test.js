/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyManiacDivisor';
    function rand () {
        var randomNumber = Math.round(Math.random() * 268435454);
        return (randomNumber + 1);
    }
    var testData = [
        // Test known good for maniacDivisor
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: 30               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: 30               }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: 1                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: 1                }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: 268435455        }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: 268435455        }, 'transcode', true]},

        // Test random number from 1-268435455 on maniacDivisor
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: rand()           }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: rand()           }, 'transcode', true]},

        // Test known bad for maniacDivisor
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: 30               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: 1                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: rand()           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: 0                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: 0                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: 0                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: 268435456        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: 268435456        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: 268435456        }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: -10              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: -10              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: -10              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: 22.2             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: 22.2             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: 22.2             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: 'a'              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: 'a'              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: 'a'              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: [0, 1, 2]        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: [0, 1, 2]        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: [0, 1, 2]        }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: {'a': 1}         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: {'a': 1}         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: {'a': 1}         }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: null             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: null             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: null             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: true             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: true             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: true             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacDivisor: false            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacDivisor: false            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacDivisor: false            }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
