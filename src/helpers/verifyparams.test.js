/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'verifyParams';
    var subject = require('./' + testName.toLowerCase() + '.js');

    var testData = [
        // Test if params exist
        { 'src': 'encode',    'param': undefined,                              'expectation': false },
        { 'src': 'encode',    'param': null,                                   'expectation': false },
        { 'src': 'encode',    'param': true,                                   'expectation': false },
        { 'src': 'encode',    'param': false,                                  'expectation': false },
        { 'src': 'encode',    'param': 8,                                      'expectation': false },
        { 'src': 'encode',    'param': '',                                     'expectation': false },
        { 'src': 'encode',    'param': [],                                     'expectation': false },
        { 'src': 'encode',    'param': {},                                     'expectation': false },

        // Test if src exists
        { 'src': undefined,   'param': { input: 'a.png',  output: 'a.flif'  }, 'expectation': false },
        { 'src': null,        'param': { input: 'a.png',  output: 'a.flif'  }, 'expectation': false },
        { 'src': true,        'param': { input: 'a.png',  output: 'a.flif'  }, 'expectation': false },
        { 'src': false,       'param': { input: 'a.png',  output: 'a.flif'  }, 'expectation': false },
        { 'src': 8,           'param': { input: 'a.png',  output: 'a.flif'  }, 'expectation': false },
        { 'src': '',          'param': { input: 'a.png',  output: 'a.flif'  }, 'expectation': false },
        { 'src': [],          'param': { input: 'a.png',  output: 'a.flif'  }, 'expectation': false },
        { 'src': {},          'param': { input: 'a.png',  output: 'a.flif'  }, 'expectation': false },

        // Test if input/output exists
        { 'src': 'encode',    'param': { input: 'a.png'                     }, 'expectation': false },
        { 'src': 'decode',    'param': { input: 'a.png'                     }, 'expectation': false },
        { 'src': 'transcode', 'param': { input: 'a.png'                     }, 'expectation': false },
        { 'src': 'encode',    'param': {                  output: 'a.flif'  }, 'expectation': false },
        { 'src': 'decode',    'param': {                  output: 'a.flif'  }, 'expectation': false },
        { 'src': 'transcode', 'param': {                  output: 'a.flif'  }, 'expectation': false },

        // Test known good input/output filetypes for encode
        { 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif'  }, 'expectation': true  },
        { 'src': 'encode',    'param': { input: 'a.pnm',  output: 'a.flif'  }, 'expectation': true  },
        { 'src': 'encode',    'param': { input: 'a.ppm',  output: 'a.flif'  }, 'expectation': true  },
        { 'src': 'encode',    'param': { input: 'a.pgm',  output: 'a.flif'  }, 'expectation': true  },
        { 'src': 'encode',    'param': { input: 'a.pbm',  output: 'a.flif'  }, 'expectation': true  },
        { 'src': 'encode',    'param': { input: 'a.pam',  output: 'a.flif'  }, 'expectation': true  },

        // Test known bads for input/ouput filetypes for encode
        { 'src': 'encode',    'param': { input: 'potato', output: 'torpedo' }, 'expectation': false },
        { 'src': 'encode',    'param': { input: 'a.flif', output: 'a.flif'  }, 'expectation': false },
        { 'src': 'encode',    'param': { input: 'a.png',  output: 'a.png'   }, 'expectation': false }
    ];

    for (var i = 0; i < testData.length; i++) {
        var param = testData[i].param;
        var src = testData[i].src;
        var actual = subject(param, src, true);
        var expectation = testData[i].expectation;

        if (actual !== expectation) {
            var errMsg = '\n' +
                'TEST: verifyParams\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  Source: ' + src + '\n' +
                '  Expected: ' + expectation + '\n' +
                '  Actual: ' + actual;
            throw errMsg;
        }
    }

    return [testName, testData.length];
}

module.exports = test;
