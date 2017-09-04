/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyChromaSubsample';
    var testData = [
        // Test known good for chromaSubsample
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chromaSubsample: true      }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chromaSubsample: true      }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chromaSubsample: false     }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chromaSubsample: false     }, 'transcode', true] },

        // Test known bad for chromaSubsample
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chromaSubsample: true      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chromaSubsample: false     }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chromaSubsample: 'a'       }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chromaSubsample: 'a'       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chromaSubsample: 'a'       }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chromaSubsample: [0, 1, 2] }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chromaSubsample: [0, 1, 2] }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chromaSubsample: [0, 1, 2] }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chromaSubsample: {'a': 1}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chromaSubsample: {'a': 1}  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chromaSubsample: {'a': 1}  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chromaSubsample: null      }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chromaSubsample: null      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chromaSubsample: null      }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chromaSubsample: 8         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chromaSubsample: 8         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chromaSubsample: 8         }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
