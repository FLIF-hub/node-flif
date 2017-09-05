/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyFit';
    var testData = [
        // Test known good for fit
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:0,   height:0}      }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:1,   height:1}      }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:10,  height:20}     }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:320, height:240}    }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:1.1, height:1}      }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:1,   height:1.1}    }, 'decode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:1.1, height:1.1}    }, 'decode',    true]},

        // Test known bad for fit
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:100}                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {height:100}               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:-1,  height:10}     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:10,  height:-1}     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {width:-1,  height:-1}     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {'a':1, 'b':2, 'c':3}      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: {'a':1}                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: [0, 1, 2]                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 3                          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 22                         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: -10                        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 22.2                       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: null                       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: true                       }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: false                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 'a'                        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: '100'                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: '10x10'                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: 'x10'                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  fit: '10x'                      }, 'decode',    true]}

        // TODO: add falses for encode/transcode of fit
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
