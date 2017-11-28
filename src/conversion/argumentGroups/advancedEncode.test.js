/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var testName = 'advancedEncode';

    var guesses = {
        allHeuristically: {
            y: 'heuristically',
            co: 'heuristically',
            cg: 'heuristically',
            alpha: 'heuristically',
            lookback: 'heuristically'
        },
        allAverage: {
            y: 'average',
            co: 'average',
            cg: 'average',
            alpha: 'average',
            lookback: 'average'
        },
        allMedianGradient: {
            y: 'median gradient',
            co: 'median gradient',
            cg: 'median gradient',
            alpha: 'median gradient',
            lookback: 'median gradient'
        },
        allMedianNumber: {
            y: 'median number',
            co: 'median number',
            cg: 'median number',
            alpha: 'median number',
            lookback: 'median number'
        },
        allMixed: {
            y: 'mixed',
            co: 'mixed',
            cg: 'mixed',
            alpha: 'mixed',
            lookback: 'mixed'
        },
        rainbow1: {
            y: 'heuristically',
            co: 'average',
            cg: 'median gradient',
            alpha: 'median number',
            lookback: 'mixed'
        },
        rainbow2: {
            y: 'average',
            co: 'median gradient',
            cg: 'median number',
            alpha: 'mixed',
            lookback: 'heuristically'
        },
        rainbow3: {
            y: 'median gradient',
            co: 'median number',
            cg: 'mixed',
            alpha: 'heuristically',
            lookback: 'average'
        },
        rainbow4: {
            y: 'median number',
            co: 'mixed',
            cg: 'heuristically',
            alpha: 'average',
            lookback: 'median gradient'
        },
        rainbow5: {
            y: 'mixed',
            co: 'heuristically',
            cg: 'average',
            alpha: 'median gradient',
            lookback: 'median number'
        },
        missingY: {
            co: 'heuristically',
            cg: 'heuristically',
            alpha: 'heuristically',
            lookback: 'heuristically'
        },
        missingCo: {
            y: 'heuristically',
            cg: 'heuristically',
            alpha: 'heuristically',
            lookback: 'heuristically'
        },
        missingCg: {
            y: 'heuristically',
            co: 'heuristically',
            alpha: 'heuristically',
            lookback: 'heuristically'
        },
        missingAlpha: {
            y: 'heuristically',
            co: 'heuristically',
            cg: 'heuristically',
            lookback: 'heuristically'
        },
        missingLookback: {
            y: 'heuristically',
            co: 'heuristically',
            cg: 'heuristically',
            alpha: 'heuristically'
        },
        empty: {}
    };

    var testData = [
        { expected: '-P512',   arguments: [{ maxPaletteSize: 512              }] },
        { expected: '-P256',   arguments: [{ maxPaletteSize: 256              }] },
        { expected: '-P128',   arguments: [{ maxPaletteSize: 128              }] },
        { expected: '-P64',    arguments: [{ maxPaletteSize: 64               }] },
        { expected: '-P32',    arguments: [{ maxPaletteSize: 32               }] },
        { expected: '-P16',    arguments: [{ maxPaletteSize: 16               }] },
        { expected: '-P8',     arguments: [{ maxPaletteSize: 8                }] },
        { expected: '-P4',     arguments: [{ maxPaletteSize: 4                }] },
        { expected: '-P2',     arguments: [{ maxPaletteSize: 2                }] },
        { expected: '-A',      arguments: [{ colorBuckets: true               }] },
        { expected: '-B',      arguments: [{ colorBuckets: false              }] },
        { expected: '',        arguments: [{ colorBuckets: 'auto'             }] },
        { expected: '',        arguments: [{ channelCompact: true             }] },
        { expected: '-C',      arguments: [{ channelCompact: false            }] },
        { expected: '',        arguments: [{ ycocg: true                      }] },
        { expected: '-Y',      arguments: [{ ycocg: false                     }] },
        { expected: '',        arguments: [{ subtractGreen: true              }] },
        { expected: '-W',      arguments: [{ subtractGreen: false             }] },
        { expected: '',        arguments: [{ frameShape: true                 }] },
        { expected: '-S',      arguments: [{ frameShape: false                }] },
        { expected: '-L1',     arguments: [{ maxFrameLookBack: 1              }] },
        { expected: '-L10',    arguments: [{ maxFrameLookBack: 10             }] },
        { expected: '-L100',   arguments: [{ maxFrameLookBack: 100            }] },
        { expected: '-R1',     arguments: [{ maniacRepeats: 1                 }] },
        { expected: '-R2',     arguments: [{ maniacRepeats: 2                 }] },
        { expected: '-R100',   arguments: [{ maniacRepeats: 100               }] },
        { expected: '-R1000',  arguments: [{ maniacRepeats: 1000              }] },
        { expected: '-T0',     arguments: [{ maniacThreshold: 0               }] },
        { expected: '-T64',    arguments: [{ maniacThreshold: 64              }] },
        { expected: '-D1',     arguments: [{ maniacDivisor: 1                 }] },
        { expected: '-D30',    arguments: [{ maniacDivisor: 30                }] },
        { expected: '-M1',     arguments: [{ maniacMinSize: 1                 }] },
        { expected: '-M50',    arguments: [{ maniacMinSize: 50                }] },
        { expected: '-X2',     arguments: [{ chanceCutoff: 2                  }] },
        { expected: '-X10',    arguments: [{ chanceCutoff: 10                 }] },
        { expected: '-Z2',     arguments: [{ chanceAlpha: 2                   }] },
        { expected: '-Z19',    arguments: [{ chanceAlpha: 19                  }] },
        { expected: '-U',      arguments: [{ adaptive: true                   }] },
        { expected: '',        arguments: [{ adaptive: false                  }] },
        { expected: '-G?????', arguments: [{ guess: guesses.allHeuristically  }] },
        { expected: '-G00000', arguments: [{ guess: guesses.allAverage        }] },
        { expected: '-G11111', arguments: [{ guess: guesses.allMedianGradient }] },
        { expected: '-G22222', arguments: [{ guess: guesses.allMedianNumber   }] },
        { expected: '-GXXXXX', arguments: [{ guess: guesses.allMixed          }] },
        { expected: '-G?012X', arguments: [{ guess: guesses.rainbow1          }] },
        { expected: '-G012X?', arguments: [{ guess: guesses.rainbow2          }] },
        { expected: '-G12X?0', arguments: [{ guess: guesses.rainbow3          }] },
        { expected: '-G2X?01', arguments: [{ guess: guesses.rainbow4          }] },
        { expected: '-GX?012', arguments: [{ guess: guesses.rainbow5          }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingY          }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingCo         }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingCg         }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingAlpha      }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingLookback   }] },
        { expected: '-G?????', arguments: [{ guess: guesses.empty             }] },


        // TODO: check how you actually pass stuff into "guess", --guess=N[N..]
        // -K, --keep-invisible-rgb    store original RGB values behind A=0
        // -G, --guess=N[N..]          pixel predictor for each plane (Y,Co,Cg,Alpha,Lookback)
        //                             ?=pick heuristically, 0=avg, 1=median_grad, 2=median_nb, X=mixed
        // -H, --invisible-guess=N     predictor for invisible pixels (only if -K is not used)
        { expected: '-H?',     arguments: [{ alphaGuess: 'heuristically'      }] },
        { expected: '-H0',     arguments: [{ alphaGuess: 'average'            }] },
        { expected: '-H1',     arguments: [{ alphaGuess: 'median gradient'    }] },
        { expected: '-H2',     arguments: [{ alphaGuess: 'median number'      }] },
        { expected: '-HX',     arguments: [{ alphaGuess: 'mixed'              }] },
        { expected: '-J',      arguments: [{ chromaSubsample: true            }] },
        { expected: '',        arguments: [{ chromaSubsample: false           }] }
    ];

    runAllTests(testName, 'conversion/argumentGroups', testData);

    return [testName, testData.length];
}

module.exports = test;
