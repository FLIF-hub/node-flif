/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'verifyParams';
    function rand (num) {
        return Math.round(Math.random() * num);
    }
    var testData = [
        // Test known good for chanceCutoff
        // TODO: Find out upper/lower bounds for chanceCutoff, all I know is it allows for the number 2
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 1                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 1                 }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 2                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 2                 }, 'transcode', true]},

        // Test random number from 1-100 on chanceCutoff
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: rand(99) + 1      }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: rand(99) + 1      }, 'transcode', true]},

        // Test known bad for chanceCutoff
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 2                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: rand(99) + 1      }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 0                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 0                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 0                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: -10               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: -10               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: -10               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 22.2              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 22.2              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 22.2              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: 'a'               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: 'a'               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: 'a'               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: [0, 1, 2]         }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: [0, 1, 2]         }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: [0, 1, 2]         }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: {'a': 1}          }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: {'a': 1}          }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: {'a': 1}          }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: null              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: null              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: null              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: true              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: true              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: true              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', chanceCutoff: false             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  chanceCutoff: false             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceCutoff: false             }, 'transcode', true]},

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
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', chanceAlpha: false              }, 'transcode', true]},

        // Test known good for adaptive
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: true                  }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: true                  }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: false                 }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: false                 }, 'transcode', true]},

        // Test known bad for adaptive
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: true                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: false                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: 'a'                   }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: 'a'                   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: 'a'                   }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: [0, 1, 2]             }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: [0, 1, 2]             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: [0, 1, 2]             }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: {'a': 1}              }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: {'a': 1}              }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: {'a': 1}              }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: null                  }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: null                  }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: null                  }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', adaptive: 8                     }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  adaptive: 8                     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', adaptive: 8                     }, 'transcode', true]},

        // Test known good for guess
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'heuristically'          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'heuristically'          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'average'                }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'average'                }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'median gradient'        }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'median gradient'        }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'median number'          }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'median number'          }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', guess: 'mixed'                  }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', guess: 'mixed'                  }, 'transcode', true]},

        // Test known bad for guess
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
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', guess: 8                        }, 'transcode', true]},

        // Test known good for alphaGuess
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'heuristically'     }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'heuristically'     }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'average'           }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'average'           }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'median gradient'   }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'median gradient'   }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'median number'     }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'median number'     }, 'transcode', true]},
        { expected: true,  arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'mixed'             }, 'encode',    true]},
        { expected: true,  arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'mixed'             }, 'transcode', true]},

        // Test known bad for alphaGuess
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'heuristically'     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'average'           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'median gradient'   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'median number'     }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'mixed'             }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: true                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: true                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: true                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: false               }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: false               }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: false               }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 'a'                 }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 'a'                 }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 'a'                 }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: [0, 1, 2]           }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: [0, 1, 2]           }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: [0, 1, 2]           }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: {'a': 1}            }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: {'a': 1}            }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: {'a': 1}            }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: null                }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: null                }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: null                }, 'transcode', true]},
        { expected: false, arguments: [{ input: 'a.png',  output: 'a.flif', alphaGuess: 8                   }, 'encode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.png',  alphaGuess: 8                   }, 'decode',    true]},
        { expected: false, arguments: [{ input: 'a.flif', output: 'a.flif', alphaGuess: 8                   }, 'transcode', true]}
    ];

    runAllTests(testName, 'helpers', testData);

    return [testName, testData.length];
}

module.exports = test;
