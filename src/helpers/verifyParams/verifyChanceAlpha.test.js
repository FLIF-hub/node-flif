/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyChanceAlpha';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for chanceAlpha
        // TODO: Find out upper/lower bounds for chanceAlpha, all I know is it allows for the number 19
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: 1                  }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: 1                  }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: 2                  }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: 2                  }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: 19                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: 19                 }, 'transcode', true]},

        // Test random number from 0-100 on chanceAlpha
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: rand(99)           }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: rand(99)           }, 'transcode', true]},

        // Test known bad for chanceAlpha
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: 19                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: rand(99)           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: 0                  }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: 0                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: 0                  }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: -10                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: -10                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: -10                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: 22.2               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: 22.2               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: 22.2               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: 'a'                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: 'a'                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: 'a'                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: [0, 1, 2]          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: [0, 1, 2]          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: [0, 1, 2]          }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: {'a': 1}           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: {'a': 1}           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: {'a': 1}           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: null               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: null               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: null               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: true               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: true               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: true               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceAlpha: false              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceAlpha: false              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: false              }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
