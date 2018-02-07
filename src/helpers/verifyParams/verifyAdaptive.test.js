/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyAdaptive';
    var testData = [
        // Test known good for adaptive
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: 'c.png'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: 'c.png'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: 'c.pnm'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: 'c.pnm'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: 'c.ppm'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: 'c.ppm'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: 'c.pgm'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: 'c.pgm'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: 'c.pbm'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: 'c.pbm'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: 'c.pam'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: 'c.pam'   }, 'transcode', true]},

        { expected: true,  arguments: [{ input:['a.png'],  output:'a.flif', encodeQuality: 9, adaptive: 'c.png'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input:['a.flif'], output:'a.flif', encodeQuality: 9, adaptive: 'c.png'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input:['a.png'],  output:'a.flif', encodeQuality: 9, adaptive: 'c.pnm'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input:['a.flif'], output:'a.flif', encodeQuality: 9, adaptive: 'c.pnm'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input:['a.png'],  output:'a.flif', encodeQuality: 9, adaptive: 'c.ppm'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input:['a.flif'], output:'a.flif', encodeQuality: 9, adaptive: 'c.ppm'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input:['a.png'],  output:'a.flif', encodeQuality: 9, adaptive: 'c.pgm'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input:['a.flif'], output:'a.flif', encodeQuality: 9, adaptive: 'c.pgm'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input:['a.png'],  output:'a.flif', encodeQuality: 9, adaptive: 'c.pbm'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input:['a.flif'], output:'a.flif', encodeQuality: 9, adaptive: 'c.pbm'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input:['a.png'],  output:'a.flif', encodeQuality: 9, adaptive: 'c.pam'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input:['a.flif'], output:'a.flif', encodeQuality: 9, adaptive: 'c.pam'   }, 'transcode', true]},

        // Test known bad for adaptive
        { expected: false, arguments: [{ input: ['a.png',  'b.png' ], output: 'a.flif', encodeQuality: 9, adaptive: 'c.png'}, 'encode',    true]},
        { expected: false, arguments: [{ input: ['a.flif', 'b.flif'], output: 'a.png',  encodeQuality: 9, adaptive: 'c.png'}, 'decode',    true]},
        { expected: false, arguments: [{ input: ['a.flif', 'b.flif'], output: 'a.flif', encodeQuality: 9, adaptive: 'c.png'}, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: 'c.png'                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: 'c.png'                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: 'c.png'                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: 'no-ext'  }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 9, adaptive: 'no-ext'  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: 'no-ext'  }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 100, adaptive: 'c.png' }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 100, adaptive: 'c.png' }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 100, adaptive: 'c.png' }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: true      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 9, adaptive: true      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: true      }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: false     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 9, adaptive: false     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: false     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: 'a'       }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 9, adaptive: 'a'       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: 'a'       }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: [0, 1, 2] }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 9, adaptive: [0, 1, 2] }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: [0, 1, 2] }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: {'a': 1}  }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 9, adaptive: {'a': 1}  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: {'a': 1}  }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: null      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 9, adaptive: null      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: null      }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', encodeQuality: 9, adaptive: 8         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  encodeQuality: 9, adaptive: 8         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', encodeQuality: 9, adaptive: 8         }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
