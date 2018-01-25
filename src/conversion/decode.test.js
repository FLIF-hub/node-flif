/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'decode';
    var testData = [
        // Individual params
        { expected: false,                        arguments: [{input:'a.flif', output:'b.flif'                             }] },
        { expected: false,                        arguments: [{input:'a.png',  output:'b.flif'                             }] },
        { expected: '-d "a.flif" "b.png"',        arguments: [{input:'a.flif', output:'b.png'                              }] },
        { expected: '-d "a.flif" "b.png"',        arguments: [{input:'a.flif', output:'b.png', async: true                 }] },
        { expected: '-d "a.flif" "b.png"',        arguments: [{input:'a.flif', output:'b.png', async: false                }] },

        // Multi param tests
        {
            expected: '-d -f=640x480 "a.flif" "b.png"',
            arguments: [
                {
                    input: 'a.flif',
                    output: 'b.png',
                    fit: {
                        width: 640,
                        height: 480
                    }
                }
            ]
        },
        {
            expected: '-d -s=8 -f=640x480 "a.flif" "b.png"',
            arguments: [
                {
                    input: 'a.flif',
                    output: 'b.png',
                    scale: 8,
                    fit: {
                        width: 640,
                        height: 480
                    }
                }
            ]
        },
        {
            expected: '-d -q=81 -s=1 -r=200x400 -f=200x400 "a.flif" "b.png"',
            arguments: [
                {
                    input: 'a.flif',
                    output: 'b.png',
                    async: false,
                    decodeQuality: 81,
                    scale: 1,
                    resize: {
                        width: 200,
                        height: 400
                    },
                    fit: {
                        width: 200,
                        height: 400
                    }
                }
            ]
        }
    ];

    runAllTests(testName, 'conversion', testData);

    return [testName, testData.length];
}

module.exports = test;
