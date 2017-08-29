/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('./verifyParamsHelpers/loopOverParamsTests.js');
    var testName = 'ensureInputOutputExist';
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

        // Test known good input/output filetypes for encode
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',   output: 'a.flif'  } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pnm',   output: 'a.flif'  } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.ppm',   output: 'a.flif'  } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pgm',   output: 'a.flif'  } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pbm',   output: 'a.flif'  } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pam',   output: 'a.flif'  } },

        // Test known bad for input/ouput filetypes for encode
        { 'expect': false, 'src': 'encode',    'param': { input: 'potato',  output: 'starch'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.flif',  output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: 'a.png'   } },

        // Test known good input/output filetypes for decode
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif',  output: 'a.png'   } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif',  output: 'a.pnm'   } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif',  output: 'a.ppm'   } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif',  output: 'a.pgm'   } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif',  output: 'a.pbm'   } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif',  output: 'a.pam'   } },

        // Test known bad for input/ouput filetypes for decode
        { 'expect': false, 'src': 'decode',    'param': { input: 'taco',    output: 'rocket'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.png',   output: 'a.png'   } },

        // Test known good input/output filetypes for transcode
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif',  output: 'b.flif'  } },

        // Test known bad for input/ouput filetypes for transcode
        { 'expect': false, 'src': 'transcode', 'param': { input: 'turtle',  output: 'robot'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.png',   output: 'a.flif'  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: 'a.png'   } }
    ];

    runAllTests(testName, testData);

    return [testName, testData.length];
}

module.exports = test;
