/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'encode';
    var subject = require('./' + testName.toLowerCase() + '.js');

    var testData = [
        // Individual Params
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png'                                } },

        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', async: true                   } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', async: false                  } },
        { expectation: '-e -o "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', overwrite: true               } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', overwrite: false              } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepMetaData: true            } },
        { expectation: '-e -m "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepMetaData: false           } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepColorProfile: true        } },
        { expectation: '-e -p "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepColorProfile: false       } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', crc: true                     } },
        { expectation: '-e -c "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', crc: false                    } },
        { expectation: '-e -k "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepPalette: true             } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepPalette: false            } },

        { expectation: '-e -E0 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', effort: 0                     } },
        { expectation: '-e -E1 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', effort: 1                     } },
        { expectation: '-e -E50 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', effort: 50                    } },
        { expectation: '-e -E100 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', effort: 100                   } },
        { expectation: '-e -I "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', interlace: true               } },
        { expectation: '-e -N "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', interlace: false              } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', interlace: 'auto'             } },
        { expectation: '-e -Q0 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', quality: 0                    } },
        { expectation: '-e -Q1 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', quality: 1                    } },
        { expectation: '-e -Q50 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', quality: 50                   } },
        { expectation: '-e -Q100 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', quality: 100                  } },
        { expectation: '-e -K "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', keepAlpha: true               } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', keepAlpha: false              } },
        { expectation: '-e -F100 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', frameDelay: [100]             } },
        { expectation: '-e -F1,2 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', frameDelay: [1, 2]            } },
        { expectation: '-e -P512 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', maxPaletteSize: 512           } },
        { expectation: '-e -P256 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', maxPaletteSize: 256           } },
        { expectation: '-e -P128 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', maxPaletteSize: 128           } },
        { expectation: '-e -P64 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', maxPaletteSize: 64            } },
        { expectation: '-e -P32 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', maxPaletteSize: 32            } },
        { expectation: '-e -P16 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', maxPaletteSize: 16            } },
        { expectation: '-e -P8 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', maxPaletteSize: 8             } },
        { expectation: '-e -P4 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', maxPaletteSize: 4             } },
        { expectation: '-e -P2 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', maxPaletteSize: 2             } },
        { expectation: '-e -A "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', colorBuckets: true            } },
        { expectation: '-e -B "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', colorBuckets: false           } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', colorBuckets: 'auto'          } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', channelCompact: true          } },
        { expectation: '-e -C "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', channelCompact: false         } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', ycocg: true                   } },
        { expectation: '-e -Y "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', ycocg: false                  } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', subtractGreen: true           } },
        { expectation: '-e -W "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', subtractGreen: false          } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', frameShape: true              } },
        { expectation: '-e -S "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', frameShape: false             } },
        { expectation: '-e -L1 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', maxFrameLookBack: 1           } },
        { expectation: '-e -L10 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', maxFrameLookBack: 10          } },
        { expectation: '-e -L100 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', maxFrameLookBack: 100         } },
        { expectation: '-e -R1 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', maniacRepeats: 1              } },
        { expectation: '-e -R2 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', maniacRepeats: 2              } },
        { expectation: '-e -R100 "a.flif" "b.png"',  params: {input:'a.flif', output:'b.png', maniacRepeats: 100            } },
        { expectation: '-e -R1000 "a.flif" "b.png"', params: {input:'a.flif', output:'b.png', maniacRepeats: 1000           } },
        { expectation: '-e -T0 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', maniacThreshold: 0            } },
        { expectation: '-e -T64 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', maniacThreshold: 64           } },
        { expectation: '-e -D1 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', maniacDivisor: 1              } },
        { expectation: '-e -D30 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', maniacDivisor: 30             } },
        { expectation: '-e -M1 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', maniacMinSize: 1              } },
        { expectation: '-e -M50 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', maniacMinSize: 50             } },
        { expectation: '-e -X2 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', chanceCutoff: 2               } },
        { expectation: '-e -X10 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', chanceCutoff: 10              } },
        { expectation: '-e -Z2 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', chanceAlpha: 2                } },
        { expectation: '-e -Z19 "a.flif" "b.png"',   params: {input:'a.flif', output:'b.png', chanceAlpha: 19               } },
        { expectation: '-e -U "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', adaptive: true                } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', adaptive: false               } },
        { expectation: '-e -G? "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', guess: 'heuristically'        } },
        { expectation: '-e -G0 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', guess: 'average'              } },
        { expectation: '-e -G1 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', guess: 'median gradient'      } },
        { expectation: '-e -G2 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', guess: 'median number'        } },
        { expectation: '-e -GX "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', guess: 'mixed'                } },
        { expectation: '-e -H? "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', alphaGuess: 'heuristically'   } },
        { expectation: '-e -H0 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', alphaGuess: 'average'         } },
        { expectation: '-e -H1 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', alphaGuess: 'median gradient' } },
        { expectation: '-e -H2 "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', alphaGuess: 'median number'   } },
        { expectation: '-e -HX "a.flif" "b.png"',    params: {input:'a.flif', output:'b.png', alphaGuess: 'mixed'           } },
        { expectation: '-e -J "a.flif" "b.png"',     params: {input:'a.flif', output:'b.png', chromaSubsample: true         } },
        { expectation: '-e "a.flif" "b.png"',        params: {input:'a.flif', output:'b.png', chromaSubsample: false        } },

        // Multi param tests
        {
            expectation: '-e -m -p -o "a.flif" "b.png"',
            params: {
                input:'a.flif',
                output:'b.png',
                overwrite: true,
                keepMetaData: false,
                keepColorProfile: false
            }
        },
        {
            expectation: '-e -c -R100 -H0 "a.flif" "b.png"',
            params: {
                input: 'a.flif',
                output: 'b.png',
                crc: false,
                overwrite: false,
                maniacRepeats: 100,
                alphaGuess: 'average'
            }
        },
        {
            expectation: '-e -E0 -I -Q0 -F250,1000,250 -P2 -A -L10 -R200 -T256 -D10 -M1 -X50 -Z1 -G2 -H1 "a.png" "b.flif"',
            params: {
                input: 'a.png',
                output: 'b.flif',
                async: false,
                overwrite: false,
                effort: 0,
                interlace: true,
                quality: 0,
                keepAlpha: false,
                crc: true,
                keepMetaData: true,
                keepColorProfile: true,
                keepPalette: false,
                maxPaletteSize: 2,
                colorBuckets: true,
                channelCompact: true,
                ycocg: true,
                subtractGreen: true,
                frameShape: true,
                maxFrameLookBack: 10,
                maniacRepeats: 200,
                maniacThreshold: 256,
                maniacDivisor: 10,
                maniacMinSize: 1,
                chanceCutoff: 50,
                chanceAlpha: 1,
                adaptive: false,
                guess: 'median number',
                alphaGuess: 'median gradient',
                chromaSubsample: false,
                frameDelay: [250, 1000, 250]
            }
        },
        {
            expectation: '-e "a.png" "b.flif"',
            params: {
                input: 'a.png',
                output: 'b.flif',
                async: false,
                overwrite: false,        // -o for true
                interlace: 'auto',       // -I for true | -N for false | empty string for auto
                keepAlpha: false,        // -K when true
                crc: true,               // -c when false
                keepMetaData: true,      // -m when false
                keepColorProfile: true,  // -p when false
                keepPalette: false,      // -k when true
                colorBuckets: 'auto',    // -B when false | -A when true | empty string when 'auto'
                channelCompact: true,    // -C
                ycocg: true,             // -Y when false
                subtractGreen: true,     // -W when false
                frameShape: true,        // -S when false
                adaptive: false,         // -U
                chromaSubsample: false   // -J
            }
        },
        {
            expectation: '-e -c -m -p -o -k -E100 -I -Q100 -K -F100 ' +
            '-P512 -B -C -Y -W -S -L1 -R2 -T64 -D30 -M50 -X2 -Z19 -U -G? -J "a.png" "b.flif"',
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
                chromaSubsample: true,   // -J
                frameDelay: [100]        // -F100
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
