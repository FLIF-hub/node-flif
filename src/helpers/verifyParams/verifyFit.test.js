/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyFit';
    var testData = [
        // Test known good for fit
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:0,   height:0}      }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', fit: {width:0,   height:0}      }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:1,   height:1}      }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', fit: {width:1,   height:1}      }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:10,  height:20}     }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', fit: {width:10,  height:20}     }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:320, height:240}    }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', fit: {width:320, height:240}    }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:1.1, height:1}      }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', fit: {width:1.1, height:1}      }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:1,   height:1.1}    }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', fit: {width:1,   height:1.1}    }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:1.1, height:1.1}    }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', fit: {width:1.1, height:1.1}    }, 'transcode', true]},

        // Test known bad for fit
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:0,   height:0}      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:1,   height:1}      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:10,  height:20}     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:320, height:240}    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:1.1, height:1}      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:1,   height:1.1}    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:1.1, height:1.1}    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:100}                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:100}                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {height:100}               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {height:100}               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:-1,  height:10}     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:-1,  height:10}     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:10,  height:-1}     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:10,  height:-1}     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:-1,  height:-1}     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {width:-1,  height:-1}     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {'a':1, 'b':2, 'c':3}      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {'a':1, 'b':2, 'c':3}      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {'a':1}                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: {'a':1}                    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: [0, 1, 2]                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: [0, 1, 2]                  }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 3                          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: 3                          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 22                         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: 22                         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: -10                        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: -10                        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 22.2                       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: 22.2                       }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: null                       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: null                       }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: true                       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: true                       }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: false                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: false                      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 'a'                        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: 'a'                        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: '100'                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: '100'                      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: '10x10'                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: '10x10'                    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 'x10'                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: 'x10'                      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: '10x'                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', fit: '10x'                      }, 'encode',    true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
