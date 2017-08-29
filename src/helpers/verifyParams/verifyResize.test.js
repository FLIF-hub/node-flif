/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('./verifyParamsHelpers/loopOverParamsTests.js');
    var testName = 'verifyResize';
    var testData = [
        // Test known good for resize
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:0,   height:0}   } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:1,   height:1}   } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:10,  height:20}  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:320, height:240} } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:1.1, height:1}   } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:1,   height:1.1} } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:1.1, height:1.1} } },

        // Test known bad for resize
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:100}             } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {height:100}            } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:-1,  height:10}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:10,  height:-1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {width:-1,  height:-1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {'a':1, 'b':2, 'c':3}   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {'a':1}                 } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: [0, 1, 2]               } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 3                       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 22                      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: -10                     } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 22.2                    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: null                    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: true                    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: false                   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 'a'                     } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: '100'                   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: '10x10'                 } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 'x10'                   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: '10x'                   } }
    ];

    runAllTests(testName, testData);

    return [testName, testData.length];
}

module.exports = test;
