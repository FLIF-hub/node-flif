/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'commonEncodeDecode';
    var testData = [
        { expected: '',   arguments: [{crc: true               }] },
        { expected: '-c', arguments: [{crc: false              }] },
        { expected: '',   arguments: [{keepMetaData: true      }] },
        { expected: '-m', arguments: [{keepMetaData: false     }] },
        { expected: '',   arguments: [{keepColorProfile: true  }] },
        { expected: '-p', arguments: [{keepColorProfile: false }] },
        { expected: '-o', arguments: [{overwrite: true         }] },
        { expected: '',   arguments: [{overwrite: false        }] },
        { expected: '-k', arguments: [{keepPalette: true       }] },
        { expected: '',   arguments: [{keepPalette: false      }] },

        // Multi param tests
        {
            expected: '-m -p -o',
            arguments: [
                {
                    overwrite: true,
                    keepMetaData: false,
                    keepColorProfile: false
                }
            ]
        },
        {
            expected: '-c',
            arguments: [
                {
                    crc: false,
                    overwrite: false
                }
            ]
        }
    ];

    runAllTests(testName, 'conversion/argumentGroups', testData);

    return [testName, testData.length];
}

module.exports = test;
