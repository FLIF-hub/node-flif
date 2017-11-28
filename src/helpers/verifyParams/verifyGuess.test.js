/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'verifyGuess';

    var allHeuristically = {
        y: 'heuristically',
        co: 'heuristically',
        cg: 'heuristically',
        alpha: 'heuristically',
        lookback: 'heuristically'
    };
    var allAverage = {
        y: 'average',
        co: 'average',
        cg: 'average',
        alpha: 'average',
        lookback: 'average'
    };
    var allMedianGradient = {
        y: 'median gradient',
        co: 'median gradient',
        cg: 'median gradient',
        alpha: 'median gradient',
        lookback: 'median gradient'
    };
    var allMedianNumber = {
        y: 'median number',
        co: 'median number',
        cg: 'median number',
        alpha: 'median number',
        lookback: 'median number'
    };
    var allMixed = {
        y: 'mixed',
        co: 'mixed',
        cg: 'mixed',
        alpha: 'mixed',
        lookback: 'mixed'
    };
    var rainbow1 = {
        y: 'heuristically',
        co: 'average',
        cg: 'median gradient',
        alpha: 'median number',
        lookback: 'mixed'
    };
    var rainbow2 = {
        y: 'average',
        co: 'median gradient',
        cg: 'median number',
        alpha: 'mixed',
        lookback: 'heuristically'
    };
    var rainbow3 = {
        y: 'median gradient',
        co: 'median number',
        cg: 'mixed',
        alpha: 'heuristically',
        lookback: 'average'
    };
    var rainbow4 = {
        y: 'median number',
        co: 'mixed',
        cg: 'heuristically',
        alpha: 'average',
        lookback: 'median gradient'
    };
    var rainbow5 = {
        y: 'mixed',
        co: 'heuristically',
        cg: 'average',
        alpha: 'median gradient',
        lookback: 'median number'
    };

    var missingY = {
        co: 'heuristically',
        cg: 'heuristically',
        alpha: 'heuristically',
        lookback: 'heuristically'
    };
    var missingCo = {
        y: 'heuristically',
        cg: 'heuristically',
        alpha: 'heuristically',
        lookback: 'heuristically'
    };
    var missingCg = {
        y: 'heuristically',
        co: 'heuristically',
        alpha: 'heuristically',
        lookback: 'heuristically'
    };
    var missingAlpha = {
        y: 'heuristically',
        co: 'heuristically',
        cg: 'heuristically',
        lookback: 'heuristically'
    };
    var missingLookback = {
        y: 'heuristically',
        co: 'heuristically',
        cg: 'heuristically',
        alpha: 'heuristically'
    };
    var empty = {};

    var testData = [
        // Test known good for guess
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: allHeuristically         }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: allAverage               }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: allMedianGradient        }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: allMedianNumber          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: allMixed                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: rainbow1                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: rainbow2                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: rainbow3                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: rainbow4                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: rainbow5                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: missingY                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: missingCo                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: missingCg                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: missingAlpha             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: missingLookback          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: empty                    }, 'encode',    true]},

        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: allHeuristically         }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: allAverage               }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: allMedianGradient        }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: allMedianNumber          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: allMixed                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: rainbow1                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: rainbow2                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: rainbow3                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: rainbow4                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: rainbow5                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: missingY                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: missingCo                }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: missingCg                }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: missingAlpha             }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: missingLookback          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: empty                    }, 'transcode', true]},

        // Test known bad for guess
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: allHeuristically         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: allAverage               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: allMedianGradient        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: allMedianNumber          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: allMixed                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: rainbow1                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: rainbow2                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: rainbow3                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: rainbow4                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: rainbow5                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: missingY                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: missingCo                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: missingCg                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: missingAlpha             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: missingLookback          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: empty                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'heuristically'          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'average'                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'median gradient'        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'median number'          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'mixed'                  }, 'decode',    true]},

        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: true                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: true                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: true                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: false                    }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: false                    }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: false                    }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'a'                      }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 'a'                      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'a'                      }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: [0, 1, 2]                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: [0, 1, 2]                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: [0, 1, 2]                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: {'a': 1}                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: {'a': 1}                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: {'a': 1}                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: null                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: null                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: null                     }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', guess: 8                        }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  guess: 8                        }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: 8                        }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers/verifyParams', testData);

    return [testName, testData.length];
}

module.exports = test;
