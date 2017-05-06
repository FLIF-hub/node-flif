/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'decode';
    var subject = require('./' + testName.toLowerCase() + '.js');

    var testData = [
        // Individual Params
        { expectation: '-d "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png'                              } },
        { expectation: '-d "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', async: true                 } },
        { expectation: '-d "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', async: false                } },
        { expectation: '-d -o "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', overwrite: true             } },
        { expectation: '-d "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', overwrite: false            } },
        { expectation: '-d -q=0 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', quality: 0                  } },
        { expectation: '-d -q=1 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', quality: 1                  } },
        { expectation: '-d -q=50 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', quality: 50                 } },
        { expectation: '-d -q=100 "a.flif" "b.png"', params: {input:'a.flif', output:'b.png', quality: 100                } },
        { expectation: '-d "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepMetaData: true          } },
        { expectation: '-d -m "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepMetaData: false         } },
        { expectation: '-d "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepColorProfile: true      } },
        { expectation: '-d -p "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepColorProfile: false     } },
        { expectation: '-d "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', crc: true                   } },
        { expectation: '-d -c "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', crc: false                  } },
        { expectation: '-d "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepPalette: true           } },
        { expectation: '-d -k "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepPalette: false          } },
        { expectation: '-d -s=1 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', scale: 1                    } },
        { expectation: '-d -s=2 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', scale: 2                    } },
        { expectation: '-d -s=4 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', scale: 4                    } },
        { expectation: '-d -s=8 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', scale: 8                    } },
        { expectation: '-d -s=16 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', scale: 16                   } },
        { expectation: '-d -s=32 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', scale: 32                   } },
        { expectation: '-d -r=1x1 "a.flif" "b.png"', params: {input:'a.flif', output:'b.png', resize: {width:1, height:1} } },
        { expectation: '-d -f=1x1 "a.flif" "b.png"', params: {input:'a.flif', output:'b.png', fit: {width:1, height:1}    } },
        // Multi param tests
        {
            expectation: '-d -o -f=640x480 "a.flif" "b.png"',
            params: {
                input:'a.flif',
                output:'b.png',
                overwrite: true,
                fit: {
                    width: 640,
                    height: 480
                }
            }
        },
        {
            expectation: '-d -c -o -s=8 -f=640x480 "a.flif" "b.png"',
            params: {
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
        },
        {
            expectation: '-d -c -m -p -o -k -q=81 -s=1 -r=200x400 -f=200x400 "a.flif" "b.png"',
            params: {
                input: 'a.flif',
                output: 'b.png',
                async: false,
                crc: false,
                keepMetaData: false,
                keepColorProfile: false,
                overwrite: true,
                keepPalette: false,
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
        }
    ];

    for (var i = 0; i < testData.length; i++) {
        var params = testData[i].params;
        var actual = subject(params);
        var expectation = testData[i].expectation;
        if (actual !== expectation) {
            var errMsg = '\n' +
                'TEST: ' + testName + '\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  Expected: ' + expectation + '\n' +
                '  Actual:   ' + actual + '\n' +
                '  Params: ' + JSON.stringify(params, null, 4).replace('}', '  }');
            throw errMsg;
        }
    }

    return [testName, testData.length];
}

module.exports = test;
