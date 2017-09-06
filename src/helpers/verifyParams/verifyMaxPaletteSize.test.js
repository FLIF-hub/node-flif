/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyMaxPaletteSize';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for maxPaletteSize
        // TODO: Find out upper bounds for maxPaletteSize, all I know is it allows for the number 512 and logically shouldn't be less than 2
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 512             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 512             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 256             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 256             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 128             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 128             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 64              }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 64              }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 32              }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 32              }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 16              }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 16              }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 8               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 8               }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 4               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 4               }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 2               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 2               }, 'transcode', true]},

        // Test random number from 2-1024 on maxPaletteSize
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: rand(1022) + 2  }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: rand(1022) + 2  }, 'transcode', true]},

        // Test known bad for maxPaletteSize
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: rand(1022) + 2  }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 512             }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 256             }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 128             }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 64              }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 32              }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 16              }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 8               }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 4               }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 2               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 1               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 1               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 1               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: 0               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: 0               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: 0               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', maxPaletteSize: -10             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  maxPaletteSize: -10             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', maxPaletteSize: -10             }, 'transcode', true]},
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
