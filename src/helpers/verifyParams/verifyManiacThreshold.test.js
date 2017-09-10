/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyManiacThreshold';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for maniacThreshold
        // TODO: Find out upper/lower bounds for maniacThreshold, all I know is it allows for the number 64
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: 64             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: 64             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: 128            }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: 128            }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: 0              }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: 0              }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: 1              }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: 1              }, 'transcode', true]},

        // Test random number from 0-255 on maniacThreshold
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: rand(255)      }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: rand(255)      }, 'transcode', true]},

        // Test known bad for maniacThreshold
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: 0              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: 1              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: 64             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: rand(255)      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: -10            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: -10            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: -10            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: 22.2           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: 22.2           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: 22.2           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: 'a'            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: 'a'            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: 'a'            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: [0, 1, 2]      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: [0, 1, 2]      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: [0, 1, 2]      }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: {'a': 1}       }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: {'a': 1}       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: {'a': 1}       }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: null           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: null           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: null           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: true           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: true           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: true           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maniacThreshold: false          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maniacThreshold: false          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maniacThreshold: false          }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
