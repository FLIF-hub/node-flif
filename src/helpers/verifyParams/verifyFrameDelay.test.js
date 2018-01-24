/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyFrameDelay';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for frameDelay
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [0]                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [0]                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [1]                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [1]                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [50]                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [50]                }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [100]               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [100]               }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [1000]              }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [1000]              }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [60000]             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [60000]             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [100, 200]          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [100, 200]          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [100, 200, 300]     }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [100, 200, 300]     }, 'transcode', true]},

        // Test random number from 0-60000 on frameDelay
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [rand(60000)]       }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [rand(60000)]       }, 'transcode', true]},

        // Test known bad for frameDelay
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [0]                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [1]                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [50]                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [100]               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [1000]              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [60000]             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [60001]             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: [60001]             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [60001]             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [100, 200]          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [100, 200, 300]     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameDelay: [rand(60000)]       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [-100]              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [-100]              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: [-100]              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: 101                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameDelay: 101                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: 101                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: -1                  }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameDelay: -1                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: -1                  }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: 22.2                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameDelay: 22.2                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: 22.2                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: 'a'                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameDelay: 'a'                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: 'a'                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: {'a': 1}            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameDelay: {'a': 1}            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: {'a': 1}            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: null                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameDelay: null                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: null                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: true                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameDelay: true                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: true                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', frameDelay: false               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  frameDelay: false               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', frameDelay: false               }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
