/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'decode';
    var testData = [
        // Individual params
        { 'expected': '-d "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png'                              }] },
        { 'expected': '-d "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', async: true                 }] },
        { 'expected': '-d "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', async: false                }] },
        { 'expected': '-d -o "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', overwrite: true             }] },
        { 'expected': '-d "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', overwrite: false            }] },
        { 'expected': '-d -q=0 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', quality: 0                  }] },
        { 'expected': '-d -q=1 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', quality: 1                  }] },
        { 'expected': '-d -q=50 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', quality: 50                 }] },
        { 'expected': '-d -q=100 "a.flif" "b.png"', 'arguments': [{input:'a.flif', output:'b.png', quality: 100                }] },
        { 'expected': '-d "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', keepMetaData: true          }] },
        { 'expected': '-d -m "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', keepMetaData: false         }] },
        { 'expected': '-d "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', keepColorProfile: true      }] },
        { 'expected': '-d -p "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', keepColorProfile: false     }] },
        { 'expected': '-d "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', crc: true                   }] },
        { 'expected': '-d -c "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', crc: false                  }] },
        { 'expected': '-d -k "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', keepPalette: true           }] },
        { 'expected': '-d "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', keepPalette: false          }] },
        { 'expected': '-d -s=1 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', scale: 1                    }] },
        { 'expected': '-d -s=2 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', scale: 2                    }] },
        { 'expected': '-d -s=4 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', scale: 4                    }] },
        { 'expected': '-d -s=8 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', scale: 8                    }] },
        { 'expected': '-d -s=16 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', scale: 16                   }] },
        { 'expected': '-d -s=32 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', scale: 32                   }] },
        { 'expected': '-d -r=1x1 "a.flif" "b.png"', 'arguments': [{input:'a.flif', output:'b.png', resize: {width:1, height:1} }] },
        { 'expected': '-d -f=1x1 "a.flif" "b.png"', 'arguments': [{input:'a.flif', output:'b.png', fit: {width:1, height:1}    }] },
        // Multi param tests
        {
            'expected': '-d -o -f=640x480 "a.flif" "b.png"',
            'arguments': [
                {
                    input: 'a.flif',
                    output: 'b.png',
                    overwrite: true,
                    fit: {
                        width: 640,
                        height: 480
                    }
                }
            ]
        },
        {
            'expected': '-d -c -o -s=8 -f=640x480 "a.flif" "b.png"',
            'arguments': [
                {
                    input: 'a.flif',
                    output: 'b.png',
                    crc: false,
                    overwrite: true,
                    scale: 8,
                    fit: {
                        width: 640,
                        height: 480
                    }
                }
            ]
        },
        {
            'expected': '-d -c -m -p -o -k -q=81 -s=1 -r=200x400 -f=200x400 "a.flif" "b.png"',
            'arguments': [
                {
                    input: 'a.flif',
                    output: 'b.png',
                    async: false,
                    crc: false,
                    keepMetaData: false,
                    keepColorProfile: false,
                    overwrite: true,
                    keepPalette: true,
                    quality: 81,
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
