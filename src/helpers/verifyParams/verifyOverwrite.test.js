/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'verifyOverwrite';
    var subject = require('./' + testName + '.js');

    var testData = [
        // Test known good for overwrite
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: true      } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: true      } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: true      } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: false     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: false     } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: false     } },

        // Test known bad for overwrite
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: 'a'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: 'a'       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: 'a'       } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: [0, 1, 2] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: [0, 1, 2] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: [0, 1, 2] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: {'a': 1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: {'a': 1}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: {'a': 1}  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: 8         } }
    ];

    for (var i = 0; i < testData.length; i++) {
        var param = testData[i].param;
        var src = testData[i].src;
        var actual = subject(param, src, true);
        var expectation = testData[i].expect;

        if (actual !== expectation) {
            var stack = (new Error()).stack.trim().split('\n');
            var errorMessage = require('./errorMessage.js');
            var errorDetails = {
                stack: stack,
                testName: testName,
                i: i,
                src: src,
                param: param,
                expectation: expectation,
                actual: actual
            };
            var errMsg = errorMessage(errorDetails);

            throw errMsg;
        }
    }

    return [testName, testData.length];
}

module.exports = test;
