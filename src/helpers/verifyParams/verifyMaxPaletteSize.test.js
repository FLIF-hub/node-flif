/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyMaxPaletteSize';
    function rand () {
        var upper = 32000;
        var doubled = upper * 2;
        return Math.round(Math.random() * doubled) - upper;
    }
    var testData = [
        // Test known good for maxPaletteSize
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 0               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 0               }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 1               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 1               }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 512             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 512             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 32000           }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 32000           }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: -32000          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: -32000          }, 'transcode', true]},

        // Test random number from -32000 to 32000 on maxPaletteSize
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: rand()          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: rand()          }, 'transcode', true]},

        // Test known bad for maxPaletteSize
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: rand()          }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 0               }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 1               }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 512             }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 32000           }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: -32000          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: -32001          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: -32001          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: -32001          }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 32001           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 32001           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 32001           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 22.2            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 22.2            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 22.2            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 'a'             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 'a'             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 'a'             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: [0, 1, 2]       }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: [0, 1, 2]       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: [0, 1, 2]       }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: {'a': 1}        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: {'a': 1}        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: {'a': 1}        }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: null            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: null            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: null            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: true            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: true            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: true            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: false           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: false           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: false           }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
