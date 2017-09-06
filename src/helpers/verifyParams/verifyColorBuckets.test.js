/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyColorBuckets';
    var testData = [
        // Test known good for colorBuckets
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', colorBuckets: true              }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', colorBuckets: true              }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', colorBuckets: false             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', colorBuckets: false             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', colorBuckets: 'auto'            }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', colorBuckets: 'auto'            }, 'transcode', true]},

        // Test known bad for colorBuckets
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  colorBuckets: true              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  colorBuckets: false             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  colorBuckets: 'auto'            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', colorBuckets: 'a'               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  colorBuckets: 'a'               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', colorBuckets: 'a'               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', colorBuckets: [0, 1, 2]         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  colorBuckets: [0, 1, 2]         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', colorBuckets: [0, 1, 2]         }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', colorBuckets: {'a': 1}          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  colorBuckets: {'a': 1}          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', colorBuckets: {'a': 1}          }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', colorBuckets: null              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  colorBuckets: null              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', colorBuckets: null              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', colorBuckets: 8                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  colorBuckets: 8                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', colorBuckets: 8                 }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
