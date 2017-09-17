/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'commonEncode';
    var testData = [
        { expected: '-E0',   arguments: [{ effort: 0          }] },
        { expected: '-E1',   arguments: [{ effort: 1          }] },
        { expected: '-E50',  arguments: [{ effort: 50         }] },
        { expected: '-E100', arguments: [{ effort: 100        }] },
        { expected: '-I',    arguments: [{ interlace: true    }] },
        { expected: '-N',    arguments: [{ interlace: false   }] },
        { expected: '',      arguments: [{ interlace: 'auto'  }] },
        { expected: '-Q0',   arguments: [{ quality: 0         }] },
        { expected: '-Q1',   arguments: [{ quality: 1         }] },
        { expected: '-Q50',  arguments: [{ quality: 50        }] },
        { expected: '-Q100', arguments: [{ quality: 100       }] },
        { expected: '-Q0',   arguments: [{ encodeQuality: 0   }] },
        { expected: '-Q1',   arguments: [{ encodeQuality: 1   }] },
        { expected: '-Q50',  arguments: [{ encodeQuality: 50  }] },
        { expected: '-Q100', arguments: [{ encodeQuality: 100 }] },
        { expected: '-K',    arguments: [{ keepAlpha: true    }] },
        { expected: '',      arguments: [{ keepAlpha: false   }] },
        { expected: '-F100', arguments: [{ frameDelay: [100]  }] },
        { expected: '-F1,2', arguments: [{ frameDelay: [1, 2] }] }
    ];

    runAllTests(testName, 'conversion/argumentGroups', testData);

    return [testName, testData.length];
}

module.exports = test;
