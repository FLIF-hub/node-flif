/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyChannelCompact';
    var testData = [
        // Test known good for channelCompact
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', channelCompact: true            }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', channelCompact: true            }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', channelCompact: false           }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', channelCompact: false           }, 'transcode', true]},

        // Test known bad for channelCompact
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  channelCompact: true            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  channelCompact: false           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', channelCompact: 'a'             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  channelCompact: 'a'             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', channelCompact: 'a'             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', channelCompact: [0, 1, 2]       }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  channelCompact: [0, 1, 2]       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', channelCompact: [0, 1, 2]       }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', channelCompact: {'a': 1}        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  channelCompact: {'a': 1}        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', channelCompact: {'a': 1}        }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', channelCompact: null            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  channelCompact: null            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', channelCompact: null            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', channelCompact: 8               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  channelCompact: 8               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', channelCompact: 8               }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
