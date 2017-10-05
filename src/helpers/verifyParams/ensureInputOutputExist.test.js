/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'ensureInputOutputExist';
    var testData = [
        // Test if input/output exists
        { expected: false, arguments: [{ input: 'a.png'                      }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.png'                      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.png'                      }, 'transcode', true] },
        { expected: false, arguments: [{                   output: 'a.flif'  }, 'encode',    true] },
        { expected: false, arguments: [{                   output: 'a.flif'  }, 'decode',    true] },
        { expected: false, arguments: [{                   output: 'a.flif'  }, 'transcode', true] },

        // Test if input/output are strings
        { expected: false, arguments: [{ input: undefined, output: 'a.flif'  }, 'encode',    true] },
        { expected: false, arguments: [{ input: undefined, output: 'a.png'   }, 'decode',    true] },
        { expected: false, arguments: [{ input: undefined, output: 'a.flif'  }, 'transcode', true] },
        { expected: false, arguments: [{ input: null,      output: 'a.flif'  }, 'encode',    true] },
        { expected: false, arguments: [{ input: null,      output: 'a.png'   }, 'decode',    true] },
        { expected: false, arguments: [{ input: null,      output: 'a.flif'  }, 'transcode', true] },
        { expected: false, arguments: [{ input: true,      output: 'a.flif'  }, 'encode',    true] },
        { expected: false, arguments: [{ input: true,      output: 'a.png'   }, 'decode',    true] },
        { expected: false, arguments: [{ input: true,      output: 'a.flif'  }, 'transcode', true] },
        { expected: false, arguments: [{ input: false,     output: 'a.flif'  }, 'encode',    true] },
        { expected: false, arguments: [{ input: false,     output: 'a.png'   }, 'decode',    true] },
        { expected: false, arguments: [{ input: false,     output: 'a.flif'  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 8,         output: 'a.flif'  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 8,         output: 'a.png'   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 8,         output: 'a.flif'  }, 'transcode', true] },
        { expected: false, arguments: [{ input: ['a.flf'], output: 'a.png'   }, 'decode',    true] },
        { expected: false, arguments: [{ input: ['a.flf'], output: 'a.flif'  }, 'transcode', true] },
        { expected: false, arguments: [{ input: {a: 'b'},  output: 'a.flif'  }, 'encode',    true] },
        { expected: false, arguments: [{ input: {a: 'b'},  output: 'a.png'   }, 'decode',    true] },
        { expected: false, arguments: [{ input: {a: 'b'},  output: 'a.flif'  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',   output: undefined }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: undefined }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: undefined }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',   output: null      }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: null      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: null      }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',   output: true      }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: true      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: true      }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',   output: false     }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: false     }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: false     }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',   output: 8         }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: 8         }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: 8         }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',   output: ['a.png'] }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: ['a.flf'] }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: ['a.flf'] }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',   output: {a: 'b'}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: {a: 'b'}  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: {a: 'b'}  }, 'transcode', true] },

        // Test known good input/output filetypes for encode
        { expected: true,  arguments: [{ input: 'a.png',            output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.pnm',            output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.ppm',            output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.pgm',            output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.pbm',            output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: 'a.pam',            output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: ['a.png'],          output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: ['a.png', 'b.png'], output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: ['a.pnm', 'b.pnm'], output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: ['a.ppm', 'b.ppm'], output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: ['a.pgm', 'b.pgm'], output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: ['a.pbm', 'b.pbm'], output: 'a.flif'  }, 'encode',    true] },
        { expected: true,  arguments: [{ input: ['a.pam', 'b.pam'], output: 'a.flif'  }, 'encode',    true] },

        // Test known bad for input/ouput filetypes for encode
        { expected: false, arguments: [{ input: 'potato',    output: 'starch' }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',    output: 'a.flif' }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.png',     output: 'a.png'  }, 'encode',    true] },
        { expected: false, arguments: [{ input: ['potato' ], output: 'starch' }, 'encode',    true] },
        { expected: false, arguments: [{ input: ['a.flif' ], output: 'a.flif' }, 'encode',    true] },
        { expected: false, arguments: [{ input: ['a.png'  ], output: 'a.png'  }, 'encode',    true] },
        { expected: false, arguments: [{ input: [undefined], output: 'a.flif' }, 'encode',    true] },
        { expected: false, arguments: [{ input: [null     ], output: 'a.flif' }, 'encode',    true] },
        { expected: false, arguments: [{ input: [true     ], output: 'a.flif' }, 'encode',    true] },
        { expected: false, arguments: [{ input: [false    ], output: 'a.flif' }, 'encode',    true] },
        { expected: false, arguments: [{ input: [8        ], output: 'a.flif' }, 'encode',    true] },
        { expected: false, arguments: [{ input: [22.2     ], output: 'a.flif' }, 'encode',    true] },
        { expected: false, arguments: [{ input: [{a: 'b'} ], output: 'a.flif' }, 'encode',    true] },
        { expected: false, arguments: [{ input: [['a.png']], output: 'a.flif' }, 'encode',    true] },

        // Test known good input/output filetypes for decode
        { expected: true,  arguments: [{ input: 'a.flif',  output: 'a.png'   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif',  output: 'a.pnm'   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif',  output: 'a.ppm'   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif',  output: 'a.pgm'   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif',  output: 'a.pbm'   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif',  output: 'a.pam'   }, 'decode',    true] },

        // Test known bad for input/ouput filetypes for decode
        { expected: false, arguments: [{ input: 'taco',    output: 'rocket'  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: 'a.flif'  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.png',   output: 'a.png'   }, 'decode',    true] },

        // Test known good input/output filetypes for transcode
        { expected: true,  arguments: [{ input: 'a.flif',  output: 'b.flif'  }, 'transcode', true] },

        // Test known bad for input/ouput filetypes for transcode
        { expected: false, arguments: [{ input: 'turtle',  output: 'robot'   }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.png',   output: 'a.flif'  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif',  output: 'a.png'   }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
