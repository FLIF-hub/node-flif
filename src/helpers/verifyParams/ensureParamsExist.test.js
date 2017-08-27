/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'ensureParamsExist';
    var subject = require('./' + testName + '.js');

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

        // Known good
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png'  } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif' } }
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
