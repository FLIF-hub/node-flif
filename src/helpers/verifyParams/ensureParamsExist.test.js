/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('./verifyParamsHelpers/loopOverParamsTests.js');
    var testName = 'ensureParamsExist';
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

    runAllTests(testName, testData);

    return [testName, testData.length];
}

module.exports = test;
