/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyResize';
    var testData = [
        // Test known good for resize
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:0,   height:0}   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:0,   height:0}   }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1,   height:1}   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1,   height:1}   }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:10,  height:20}  }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:10,  height:20}  }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:320, height:240} }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:320, height:240} }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1.1, height:1}   }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1.1, height:1}   }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1,   height:1.1} }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1,   height:1.1} }, 'transcode', true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1.1, height:1.1} }, 'decode',    true] },
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1.1, height:1.1} }, 'transcode', true] },



        // Test known bad for resize
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:0,   height:0}   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1,   height:1}   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:10,  height:20}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:320, height:240} }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1.1, height:1}   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1,   height:1.1} }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:1.1, height:1.1} }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:100}             }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:100}             }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:100}             }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {height:100}            }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {height:100}            }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {height:100}            }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:-1,  height:10}  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:-1,  height:10}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:-1,  height:10}  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:10,  height:-1}  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:10,  height:-1}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:10,  height:-1}  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:-1,  height:-1}  }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:-1,  height:-1}  }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {width:-1,  height:-1}  }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {'a':1, 'b':2, 'c':3}   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {'a':1, 'b':2, 'c':3}   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {'a':1, 'b':2, 'c':3}   }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {'a':1}                 }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {'a':1}                 }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: {'a':1}                 }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: [0, 1, 2]               }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: [0, 1, 2]               }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: [0, 1, 2]               }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 3                       }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 3                       }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 3                       }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 22                      }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 22                      }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 22                      }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: -10                     }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: -10                     }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: -10                     }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 22.2                    }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 22.2                    }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 22.2                    }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: null                    }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: null                    }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: null                    }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: true                    }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: true                    }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: true                    }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: false                   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: false                   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: false                   }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 'a'                     }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 'a'                     }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 'a'                     }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: '100'                   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: '100'                   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: '100'                   }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: '10x10'                 }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: '10x10'                 }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: '10x10'                 }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 'x10'                   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 'x10'                   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: 'x10'                   }, 'transcode', true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: '10x'                   }, 'decode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: '10x'                   }, 'encode',    true] },
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  resize: '10x'                   }, 'transcode', true] }
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
