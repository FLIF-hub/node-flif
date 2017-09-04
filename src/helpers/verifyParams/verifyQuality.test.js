/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyQuality';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for quality
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', quality: 0           }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  quality: 0           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', quality: 0           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', quality: 1           }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  quality: 1           }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', quality: 1           }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', quality: 50          }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  quality: 50          }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', quality: 50          }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', quality: 100         }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  quality: 100         }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', quality: 100         }, 'transcode', true] },

        // Test random number from 0-100 on quality
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', quality: rand(100)   }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  quality: rand(100)   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', quality: rand(100)   }, 'transcode', true] },

        // Test known bad for quality
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', quality: 101         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  quality: 101         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', quality: 101         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', quality: -10         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  quality: -10         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', quality: -10         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', quality: 22.2        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  quality: 22.2        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', quality: 22.2        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', quality: 'a'         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  quality: 'a'         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', quality: 'a'         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', quality: [0, 1, 2]   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  quality: [0, 1, 2]   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', quality: [0, 1, 2]   }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', quality: {'a': 1}    }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  quality: {'a': 1}    }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', quality: {'a': 1}    }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', quality: null        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  quality: null        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', quality: null        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', quality: true        }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  quality: true        }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', quality: true        }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', quality: false       }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  quality: false       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', quality: false       }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
