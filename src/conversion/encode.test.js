/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'encode';
    var testData = [
        // Individual Params
        { expected: false,                        arguments: [{input:'a.flif', output:'b.png'                                 }] },
        { expected: false,                        arguments: [{input:'a.flif', output:'b.flif'                                }] },
        { expected: '-e "a.png" "b.flif"',        arguments: [{input:'a.png',  output:'b.flif'                                }] },
        { expected: '-e "a.png" "b.flif"',        arguments: [{input:'a.png',  output:'b.flif', async: true                   }] },
        { expected: '-e "a.png" "b.flif"',        arguments: [{input:'a.png',  output:'b.flif', async: false                  }] },

        // Multi param tests
        {
            expected: '-e -E0 -I -Q0 -F250,1000,250 -P2 -A -L10 -R20 -T256 -D10 -M1 -X50 -Z2 -U -G012X0 -H1 "a.png" "c.png" "b.flif"',
            arguments: [
                {
                    input: 'a.png',
                    output: 'b.flif',
                    async: false,
                    overwrite: false,
                    effort: 0,
                    interlace: true,
                    encodeQuality: 0,
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
                    maniacRepeats: 20,
                    maniacThreshold: 256,
                    maniacDivisor: 10,
                    maniacMinSize: 1,
                    chanceCutoff: 50,
                    chanceAlpha: 2,
                    adaptive: 'c.png',
                    guess: {
                        y: 'average',
                        co: 'median gradient',
                        cg: 'median number',
                        alpha: 'mixed',
                        lookback: 'average'
                    },
                    alphaGuess: 'median gradient',
                    chromaSubsample: false,
                    frameDelay: [250, 1000, 250]
                }
            ]
        },
        {
            expected: '-e "a.png" "b.flif"',
            arguments: [
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
                    chromaSubsample: false   // -J
                }
            ]
        },
        {
            expected: '-e -c -m -p -o -k -E100 -I -Q99 -K -F100 ' +
                '-P512 -B -C -Y -W -S -L1 -R2 -T64 -D30 -M50 -X2 -Z19 -U -G????? -J "a.png" "c.png" "b.flif"',
            arguments: [
                {
                    input: 'a.png',
                    output: 'b.flif',
                    async: true,
                    overwrite: true,         // -o for true
                    effort: 100,             // -E100
                    interlace: true,         // -I for true | -N for false | empty string for auto
                    encodeQuality: 99,       // -Q99
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
                    adaptive: 'c.png',       // -U "c.png"
                    guess: {                 // -G????? | -G012X? | etc.
                        y: 'heuristically',  // -G? heuristically | -G0 avg | -G1 median_grad | -G2 median_nb | -GX mixed
                        co: 'heuristically',
                        cg: 'heuristically',
                        alpha: 'heuristically',
                        lookback: 'heuristically'
                    },

                    alphaGuess: 'average',   // -H0 | -H1 | -H2 | (only if keepAlpha is false)
                    chromaSubsample: true,   // -J
                    frameDelay: [100]        // -F100
                }
            ]
        },

        // Testing KeepAlpha and AlphaGuess interaction
        { expected: '-e -H0 "a.png" "b.flif"',    arguments: [{input:'a.png',  output:'b.flif', keepAlpha: false, alphaGuess: 'average'          }] },
        { expected: '-e -H1 "a.png" "b.flif"',    arguments: [{input:'a.png',  output:'b.flif', keepAlpha: false, alphaGuess: 'median gradient'  }] },
        { expected: '-e -H2 "a.png" "b.flif"',    arguments: [{input:'a.png',  output:'b.flif', keepAlpha: false, alphaGuess: 'median neighbors' }] },
        { expected: '-e -K "a.png" "b.flif"',     arguments: [{input:'a.png',  output:'b.flif', keepAlpha: true,  alphaGuess: 'average'          }] },
        { expected: '-e -K "a.png" "b.flif"',     arguments: [{input:'a.png',  output:'b.flif', keepAlpha: true,  alphaGuess: 'median gradient'  }] },
        { expected: '-e -K "a.png" "b.flif"',     arguments: [{input:'a.png',  output:'b.flif', keepAlpha: true,  alphaGuess: 'median neighbors' }] }
    ];

    runAllTests(testName, 'conversion', testData);

    return [testName, testData.length];
}

module.exports = test;
