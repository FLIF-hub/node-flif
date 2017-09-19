/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'commonDecode';
    var testData = [
        { expected: '-q=0',   arguments: [{quality: 0                  }] },
        { expected: '-q=1',   arguments: [{quality: 1                  }] },
        { expected: '-q=50',  arguments: [{quality: 50                 }] },
        { expected: '-q=100', arguments: [{quality: 100                }] },
        { expected: '-s=1',   arguments: [{scale: 1                    }] },
        { expected: '-s=2',   arguments: [{scale: 2                    }] },
        { expected: '-s=4',   arguments: [{scale: 4                    }] },
        { expected: '-s=8',   arguments: [{scale: 8                    }] },
        { expected: '-s=16',  arguments: [{scale: 16                   }] },
        { expected: '-s=32',  arguments: [{scale: 32                   }] },
        { expected: '-r=1x1', arguments: [{resize: {width:1, height:1} }] },
        { expected: '-f=1x1', arguments: [{fit: {width:1, height:1}    }] }
    ];

    runAllTests(testName, 'conversion/argumentGroups', testData);

    return [testName, testData.length];
}

module.exports = test;
