/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'verifyParams';
    var subject = require('./' + testName.toLowerCase() + '.js');

    var testData = [
        // Test if params exist
        { 'expect': false, 'src': 'encode',    'param': undefined                             },
        { 'expect': false, 'src': 'encode',    'param': null                                  },
        { 'expect': false, 'src': 'encode',    'param': true                                  },
        { 'expect': false, 'src': 'encode',    'param': false                                 },
        { 'expect': false, 'src': 'encode',    'param': 8                                     },
        { 'expect': false, 'src': 'encode',    'param': ''                                    },
        { 'expect': false, 'src': 'encode',    'param': []                                    },
        { 'expect': false, 'src': 'encode',    'param': {}                                    },

        // Test if src exists
        { 'expect': false, 'src': undefined,   'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': null,        'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': true,        'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': false,       'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': 8,           'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': '',          'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': [],          'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': {},          'param': { input: 'a.png',  output: 'a.flif' } },

        // Test if input/output exists
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png'                    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.png'                    } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.png'                    } },
        { 'expect': false, 'src': 'encode',    'param': {                  output: 'a.flif' } },
        { 'expect': false, 'src': 'decode',    'param': {                  output: 'a.flif' } },
        { 'expect': false, 'src': 'transcode', 'param': {                  output: 'a.flif' } },

        // Test known good input/output filetypes for encode
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pnm',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.ppm',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pgm',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pbm',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pam',  output: 'a.flif' } },

        // Test known bads for input/ouput filetypes for encode
        { 'expect': false, 'src': 'encode',    'param': { input: 'potato', output: 'starch' } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.flif', output: 'a.flif' } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.png'  } },

        // Test known good input/output filetypes for decode
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.pnm'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.ppm'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.pgm'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.pbm'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.pam'  } },

        // Test known bads for input/ouput filetypes for decode
        { 'expect': false, 'src': 'decode',    'param': { input: 'taco',   output: 'rocket' } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.flif' } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.png',  output: 'a.png'  } },

        // Test known good input/output filetypes for transcode
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'b.flif' } },

        // Test known bads for input/ouput filetypes for transcode
        { 'expect': false, 'src': 'transcode', 'param': { input: 'turtle', output: 'robot'  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.png'  } }
    ];

    for (var i = 0; i < testData.length; i++) {
        var param = testData[i].param;
        var src = testData[i].src;
        var actual = subject(param, src, true);
        var expectation = testData[i].expect;

        if (actual !== expectation) {
            var errMsg = '\n' +
                'TEST: verifyParams\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  Source: ' + src + '\n' +
                '  Params: ' + JSON.stringify(param, null, 4).replace('}', '  }') + '\n' +
                '  Expected: ' + expectation + '\n' +
                '  Actual: ' + actual;
            throw errMsg;
        }
    }

    return [testName, testData.length];
}

module.exports = test;
