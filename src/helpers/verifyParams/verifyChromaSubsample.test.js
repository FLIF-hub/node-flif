/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('./verifyParamsHelpers/loopOverParamsTests.js');
    var testName = 'verifyChromaSubsample';
    var testData = [
        // Test known good for chromaSubsample
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', chromaSubsample: true      } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', chromaSubsample: true      } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', chromaSubsample: false     } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', chromaSubsample: false     } },

        // Test known bad for chromaSubsample
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  chromaSubsample: true      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  chromaSubsample: false     } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', chromaSubsample: 'a'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  chromaSubsample: 'a'       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', chromaSubsample: 'a'       } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', chromaSubsample: [0, 1, 2] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  chromaSubsample: [0, 1, 2] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', chromaSubsample: [0, 1, 2] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', chromaSubsample: {'a': 1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  chromaSubsample: {'a': 1}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', chromaSubsample: {'a': 1}  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', chromaSubsample: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  chromaSubsample: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', chromaSubsample: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', chromaSubsample: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  chromaSubsample: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', chromaSubsample: 8         } }
    ];

    runAllTests(testName, testData);

    return [testName, testData.length];
}

module.exports = test;
