/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'encode';
    var subject = require('./' + testName.toLowerCase() + '.js');

    var testData = [
        // Individual Params
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png'                              } },
/*        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', async: true                 } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', async: false                } },
        { expectation: '-e -o "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', overwrite: true             } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', overwrite: false            } },
        { expectation: '-e -q=0 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', quality: 0                  } },
        { expectation: '-e -q=1 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', quality: 1                  } },
        { expectation: '-e -q=50 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', quality: 50                 } },
        { expectation: '-e -q=100 "a.flif" "b.png"', params: {input:'a.flif', output:'b.png', quality: 100                } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepMetaData: true          } },
        { expectation: '-e -m "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepMetaData: false         } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepColorProfile: true      } },
        { expectation: '-e -p "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepColorProfile: false     } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', crc: true                   } },
        { expectation: '-e -c "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', crc: false                  } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepPalette: true           } },
        { expectation: '-e -k "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepPalette: false          } },
        { expectation: '-e -s=1 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', scale: 1                    } },
        { expectation: '-e -s=2 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', scale: 2                    } },
        { expectation: '-e -s=4 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', scale: 4                    } },
        { expectation: '-e -s=8 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', scale: 8                    } },
        { expectation: '-e -s=16 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', scale: 16                   } },
        { expectation: '-e -s=32 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', scale: 32                   } },
        { expectation: '-e -r=1x1 "a.flif" "b.png"', params: {input:'a.flif', output:'b.png', resize: {width:1, height:1} } },
        { expectation: '-e -f=1x1 "a.flif" "b.png"', params: {input:'a.flif', output:'b.png', fit: {width:1, height:1}    } },
        // Multi param tests
        {
            expectation: '-e -o -f=640x480 "a.flif" "b.png"',
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
            expectation: '-e -c -o -s=8 -f=640x480 "a.flif" "b.png"',
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
*/
        {
            expectation: '-e -c -m -p -o -k -E100 -I -Q100 -K -F100" ' +
            '-P512 -B -C -Y -W -S -L1 -R2 -T64 -D30 -M50 -X2 -Z19 -U -G? -H? -J "a.png" "b.flif"',

            params: {
                input: 'a.png',
                output: 'b.flif',
                async: true,
                overwrite: true,         // -o for true
                effort: 100,             // -E100
                interlace: true,         // -I for true | -N for false | empty string for auto
                quality: 100,            // -Q100
                keepAlpha: true,         // -K when true
                crc: false,              // -c when false
                keepMetaData: false,     // -m when false
                keepColorProfile: false, // -p when false
                keepPalette: true,       // -k when true
                frameDelay: 100,         // -F=100
                maxPaletteSize: 512,     // -P512
                colorBuckets: false,     // -B when false | -A when true | empty string when 'auto'
                channelCompact: false,   // -C
                ycocg: false,            // -Y when false
                subtractGreen: false,    // -W when false
                frameShape: false,       // -S when false
                maxFrameLookBack: 1,     // -L1
                maniacRepeats: 2,        // -R2
                maniacThreshold: 64,     // -T64
                maniacDivisor: 30,       // -D30
                maniacMinSize: 50,       // -M50
                chanceCutoff: 2,         // -X2
                chanceAlpha: 19,         // -Z19
                adaptive: true,          // -U
                guess: 'heuristically',  // -G? heuristically | -G0 avg | -G1 median_grad | -G2 median_nb | -GX mixed
                alphaGuess: 'mixed',     // -H? | -H0 | -H1 | -H2 | -HX | (only if keepAlpha is false)
                chromaSubsample: true    // -J
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
