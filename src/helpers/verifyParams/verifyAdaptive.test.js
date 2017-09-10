/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyAdaptive';
    var testData = [
        // Test known good for adaptive
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: true                  }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: true                  }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: false                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: false                 }, 'transcode', true]},

        // Test known bad for adaptive
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: true                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: false                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: 'a'                   }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: 'a'                   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: 'a'                   }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: [0, 1, 2]             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: [0, 1, 2]             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: [0, 1, 2]             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: {'a': 1}              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: {'a': 1}              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: {'a': 1}              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: null                  }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: null                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: null                  }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: 8                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: 8                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: 8                     }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
