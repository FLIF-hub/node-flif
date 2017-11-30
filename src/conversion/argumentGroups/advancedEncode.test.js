/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../../testers/loopOverAllTestSets.js');
    var guesses = require('../../helpers/guesses.js');
    var testName = 'advancedEncode';

    var testData = [
        { expected: '-P512',   arguments: [{ maxPaletteSize: 512                     }] },
        { expected: '-P256',   arguments: [{ maxPaletteSize: 256                     }] },
        { expected: '-P128',   arguments: [{ maxPaletteSize: 128                     }] },
        { expected: '-P64',    arguments: [{ maxPaletteSize: 64                      }] },
        { expected: '-P32',    arguments: [{ maxPaletteSize: 32                      }] },
        { expected: '-P16',    arguments: [{ maxPaletteSize: 16                      }] },
        { expected: '-P8',     arguments: [{ maxPaletteSize: 8                       }] },
        { expected: '-P4',     arguments: [{ maxPaletteSize: 4                       }] },
        { expected: '-P2',     arguments: [{ maxPaletteSize: 2                       }] },
        { expected: '-A',      arguments: [{ colorBuckets: true                      }] },
        { expected: '-B',      arguments: [{ colorBuckets: false                     }] },
        { expected: '',        arguments: [{ colorBuckets: 'auto'                    }] },
        { expected: '',        arguments: [{ channelCompact: true                    }] },
        { expected: '-C',      arguments: [{ channelCompact: false                   }] },
        { expected: '',        arguments: [{ ycocg: true                             }] },
        { expected: '-Y',      arguments: [{ ycocg: false                            }] },
        { expected: '',        arguments: [{ subtractGreen: true                     }] },
        { expected: '-W',      arguments: [{ subtractGreen: false                    }] },
        { expected: '',        arguments: [{ frameShape: true                        }] },
        { expected: '-S',      arguments: [{ frameShape: false                       }] },
        { expected: '-L1',     arguments: [{ maxFrameLookBack: 1                     }] },
        { expected: '-L10',    arguments: [{ maxFrameLookBack: 10                    }] },
        { expected: '-L100',   arguments: [{ maxFrameLookBack: 100                   }] },
        { expected: '-R1',     arguments: [{ maniacRepeats: 1                        }] },
        { expected: '-R2',     arguments: [{ maniacRepeats: 2                        }] },
        { expected: '-R100',   arguments: [{ maniacRepeats: 100                      }] },
        { expected: '-R1000',  arguments: [{ maniacRepeats: 1000                     }] },
        { expected: '-T0',     arguments: [{ maniacThreshold: 0                      }] },
        { expected: '-T64',    arguments: [{ maniacThreshold: 64                     }] },
        { expected: '-D1',     arguments: [{ maniacDivisor: 1                        }] },
        { expected: '-D30',    arguments: [{ maniacDivisor: 30                       }] },
        { expected: '-M1',     arguments: [{ maniacMinSize: 1                        }] },
        { expected: '-M50',    arguments: [{ maniacMinSize: 50                       }] },
        { expected: '-X2',     arguments: [{ chanceCutoff: 2                         }] },
        { expected: '-X10',    arguments: [{ chanceCutoff: 10                        }] },
        { expected: '-Z2',     arguments: [{ chanceAlpha: 2                          }] },
        { expected: '-Z19',    arguments: [{ chanceAlpha: 19                         }] },
        { expected: '-U',      arguments: [{ adaptive: true                          }] },
        { expected: '',        arguments: [{ adaptive: false                         }] },
        { expected: '-G?????', arguments: [{ guess: guesses.allHeuristically         }] },
        { expected: '-G00000', arguments: [{ guess: guesses.allAverage               }] },
        { expected: '-G11111', arguments: [{ guess: guesses.allMedianGradient        }] },
        { expected: '-G22222', arguments: [{ guess: guesses.allMedianNumber          }] },
        { expected: '-GXXXXX', arguments: [{ guess: guesses.allMixed                 }] },
        { expected: '-G?012X', arguments: [{ guess: guesses.rainbow1                 }] },
        { expected: '-G012X?', arguments: [{ guess: guesses.rainbow2                 }] },
        { expected: '-G12X?0', arguments: [{ guess: guesses.rainbow3                 }] },
        { expected: '-G2X?01', arguments: [{ guess: guesses.rainbow4                 }] },
        { expected: '-GX?012', arguments: [{ guess: guesses.rainbow5                 }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingY                 }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingCo                }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingCg                }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingAlpha             }] },
        { expected: '-G?????', arguments: [{ guess: guesses.missingLookback          }] },
        { expected: '-G?????', arguments: [{ guess: guesses.empty                    }] },
        { expected: '',        arguments: [{ alphaGuess: 'average', keepAlpha: true  }] },
        { expected: '-H0',     arguments: [{ alphaGuess: 'average', keepAlpha: false }] },
        { expected: '-H0',     arguments: [{ alphaGuess: 'average'                   }] },
        { expected: '-H1',     arguments: [{ alphaGuess: 'median gradient'           }] },
        { expected: '-H2',     arguments: [{ alphaGuess: 'median neighbors'          }] },
        { expected: '-J',      arguments: [{ chromaSubsample: true                   }] },
        { expected: '',        arguments: [{ chromaSubsample: false                  }] }
    ];

    runAllTests(testName, 'conversion/argumentGroups', testData);

    return [testName, testData.length];
}

module.exports = test;
