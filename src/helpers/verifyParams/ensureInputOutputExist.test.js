/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'ensureInputOutputExist';
    var subject = require('./' + testName + '.js');

    var testData = [
        // Test if input/output exists
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png'                      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.png'                      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.png'                      } },
        { 'expect': false, 'src': 'encode',    'param': {                   output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': {                   output: 'a.flif'  } },
        { 'expect': false, 'src': 'transcode', 'param': {                   output: 'a.flif'  } },

        // Test if input/output are strings
        { 'expect': false, 'src': 'encode',    'param': { input: undefined, output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: undefined, output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: undefined, output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: null,      output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: null,      output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: null,      output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: true,      output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: true,      output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: true,      output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: false,     output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: false,     output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: false,     output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 8,         output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 8,         output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 8,         output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: ['a.png'], output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: ['a.flf'], output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: ['a.flf'], output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: {a: 'b'},  output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: {a: 'b'},  output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: {a: 'b'},  output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: undefined } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: undefined } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: undefined } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: true      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: true      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: true      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: false     } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: false     } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: false     } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: 8         } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: ['a.png'] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: ['a.flf'] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: ['a.flf'] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: {a: 'b'}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: {a: 'b'}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: {a: 'b'}  } },

        // Test known good
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',   output: 'a.flif'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif',  output: 'a.png'   } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif',  output: 'a.flif'  } }

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
