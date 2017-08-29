/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'verifyQuality';
    var subject = require('./' + testName + '.js');

    var testData = [
        // Test known good for quality
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 0           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 0           } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 0           } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 1           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 1           } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 1           } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 50          } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 50          } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 50          } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 100         } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 100         } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 100         } },

        // Test random number from 0-100 on quality
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: Math.round(Math.random() * 100) } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: Math.round(Math.random() * 100) } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: Math.round(Math.random() * 100) } },

        // Test known bad for quality
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 101         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 101         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 101         } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: -10         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: -10         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: -10         } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 22.2        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 22.2        } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 22.2        } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 'a'         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 'a'         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 'a'         } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: [0, 1, 2]   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: [0, 1, 2]   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: [0, 1, 2]   } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: {'a': 1}    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: {'a': 1}    } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: {'a': 1}    } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: null        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: null        } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: null        } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: true        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: true        } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: true        } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: false       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: false       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: false       } }
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