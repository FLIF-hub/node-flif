/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'encode';
    var testData = [
        // Individual Params
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png'                                }] },

        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', async: true                   }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', async: false                  }] },
        { 'expected': '-e -o "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', overwrite: true               }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', overwrite: false              }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', keepMetaData: true            }] },
        { 'expected': '-e -m "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', keepMetaData: false           }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', keepColorProfile: true        }] },
        { 'expected': '-e -p "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', keepColorProfile: false       }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', crc: true                     }] },
        { 'expected': '-e -c "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', crc: false                    }] },
        { 'expected': '-e -k "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', keepPalette: true             }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', keepPalette: false            }] },

        { 'expected': '-e -E0 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', effort: 0                     }] },
        { 'expected': '-e -E1 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', effort: 1                     }] },
        { 'expected': '-e -E50 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', effort: 50                    }] },
        { 'expected': '-e -E100 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', effort: 100                   }] },
        { 'expected': '-e -I "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', interlace: true               }] },
        { 'expected': '-e -N "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', interlace: false              }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', interlace: 'auto'             }] },
        { 'expected': '-e -Q0 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', quality: 0                    }] },
        { 'expected': '-e -Q1 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', quality: 1                    }] },
        { 'expected': '-e -Q50 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', quality: 50                   }] },
        { 'expected': '-e -Q100 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', quality: 100                  }] },
        { 'expected': '-e -K "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', keepAlpha: true               }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', keepAlpha: false              }] },
        { 'expected': '-e -F100 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', frameDelay: [100]             }] },
        { 'expected': '-e -F1,2 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', frameDelay: [1, 2]            }] },
        { 'expected': '-e -P512 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', maxPaletteSize: 512           }] },
        { 'expected': '-e -P256 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', maxPaletteSize: 256           }] },
        { 'expected': '-e -P128 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', maxPaletteSize: 128           }] },
        { 'expected': '-e -P64 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', maxPaletteSize: 64            }] },
        { 'expected': '-e -P32 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', maxPaletteSize: 32            }] },
        { 'expected': '-e -P16 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', maxPaletteSize: 16            }] },
        { 'expected': '-e -P8 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', maxPaletteSize: 8             }] },
        { 'expected': '-e -P4 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', maxPaletteSize: 4             }] },
        { 'expected': '-e -P2 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', maxPaletteSize: 2             }] },
        { 'expected': '-e -A "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', colorBuckets: true            }] },
        { 'expected': '-e -B "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', colorBuckets: false           }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', colorBuckets: 'auto'          }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', channelCompact: true          }] },
        { 'expected': '-e -C "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', channelCompact: false         }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', ycocg: true                   }] },
        { 'expected': '-e -Y "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', ycocg: false                  }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', subtractGreen: true           }] },
        { 'expected': '-e -W "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', subtractGreen: false          }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', frameShape: true              }] },
        { 'expected': '-e -S "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', frameShape: false             }] },
        { 'expected': '-e -L1 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', maxFrameLookBack: 1           }] },
        { 'expected': '-e -L10 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', maxFrameLookBack: 10          }] },
        { 'expected': '-e -L100 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', maxFrameLookBack: 100         }] },
        { 'expected': '-e -R1 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', maniacRepeats: 1              }] },
        { 'expected': '-e -R2 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', maniacRepeats: 2              }] },
        { 'expected': '-e -R100 "a.flif" "b.png"',  'arguments': [{input:'a.flif', output:'b.png', maniacRepeats: 100            }] },
        { 'expected': '-e -R1000 "a.flif" "b.png"', 'arguments': [{input:'a.flif', output:'b.png', maniacRepeats: 1000           }] },
        { 'expected': '-e -T0 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', maniacThreshold: 0            }] },
        { 'expected': '-e -T64 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', maniacThreshold: 64           }] },
        { 'expected': '-e -D1 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', maniacDivisor: 1              }] },
        { 'expected': '-e -D30 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', maniacDivisor: 30             }] },
        { 'expected': '-e -M1 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', maniacMinSize: 1              }] },
        { 'expected': '-e -M50 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', maniacMinSize: 50             }] },
        { 'expected': '-e -X2 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', chanceCutoff: 2               }] },
        { 'expected': '-e -X10 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', chanceCutoff: 10              }] },
        { 'expected': '-e -Z2 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', chanceAlpha: 2                }] },
        { 'expected': '-e -Z19 "a.flif" "b.png"',   'arguments': [{input:'a.flif', output:'b.png', chanceAlpha: 19               }] },
        { 'expected': '-e -U "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', adaptive: true                }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', adaptive: false               }] },
        { 'expected': '-e -G? "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', guess: 'heuristically'        }] },
        { 'expected': '-e -G0 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', guess: 'average'              }] },
        { 'expected': '-e -G1 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', guess: 'median gradient'      }] },
        { 'expected': '-e -G2 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', guess: 'median number'        }] },
        { 'expected': '-e -GX "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', guess: 'mixed'                }] },
        { 'expected': '-e -H? "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', alphaGuess: 'heuristically'   }] },
        { 'expected': '-e -H0 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', alphaGuess: 'average'         }] },
        { 'expected': '-e -H1 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', alphaGuess: 'median gradient' }] },
        { 'expected': '-e -H2 "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', alphaGuess: 'median number'   }] },
        { 'expected': '-e -HX "a.flif" "b.png"',    'arguments': [{input:'a.flif', output:'b.png', alphaGuess: 'mixed'           }] },
        { 'expected': '-e -J "a.flif" "b.png"',     'arguments': [{input:'a.flif', output:'b.png', chromaSubsample: true         }] },
        { 'expected': '-e "a.flif" "b.png"',        'arguments': [{input:'a.flif', output:'b.png', chromaSubsample: false        }] },

        // Multi param tests
        {
            'expected': '-e -m -p -o "a.flif" "b.png"',
            'arguments': [
                {
                    input: 'a.flif',
                    output: 'b.png',
                    overwrite: true,
                    keepMetaData: false,
                    keepColorProfile: false
                }
            ]
        },
        {
            'expected': '-e -c -R100 -H0 "a.flif" "b.png"',
            'arguments': [
                {
                    input: 'a.flif',
                    output: 'b.png',
                    crc: false,
                    overwrite: false,
                    maniacRepeats: 100,
                    alphaGuess: 'average'
                }
            ]
        },
        {
            'expected': '-e -E0 -I -Q0 -F250,1000,250 -P2 -A -L10 -R200 -T256 -D10 -M1 -X50 -Z1 -G2 -H1 "a.png" "b.flif"',
            'arguments': [
                {
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
            ]
        },
        {
            'expected': '-e "a.png" "b.flif"',
            'arguments': [
                {
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
            ]
        },
        {
            'expected': '-e -c -m -p -o -k -E100 -I -Q100 -K -F100 ' +
                '-P512 -B -C -Y -W -S -L1 -R2 -T64 -D30 -M50 -X2 -Z19 -U -G? -J "a.png" "b.flif"',
            'arguments': [
                {
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
            ]
        }
    ];

    runAllTests(testName, 'conversion', testData);

    return [testName, testData.length];
}

module.exports = test;
