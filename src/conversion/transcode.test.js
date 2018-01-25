/* eslint-disable no-multi-spaces */

function test () {
    var runAllTests = require('../testers/loopOverAllTestSets.js');
    var testName = 'transcode';
    var testData = [
        // Individual Params
        { expected: false,                         arguments: [{input:'a.png',  output:'b.flif'                                }] },
        { expected: false,                         arguments: [{input:'a.flif', output:'b.png'                                 }] },
        { expected: '-t "a.flif" "b.flif"',        arguments: [{input:'a.flif', output:'b.flif'                                }] },
        { expected: '-t "a.flif" "b.flif"',        arguments: [{input:'a.flif', output:'b.flif', async: true                   }] },
        { expected: '-t "a.flif" "b.flif"',        arguments: [{input:'a.flif', output:'b.flif', async: false                  }] },
        {
            expected: '-t ' +
                '-c -m -p -o -k -E100 -I -Q100 -K -F100 ' +
                '-q=81 -s=1 -r=200x400 -f=200x400 ' +
                '-P512 -B -C -Y -W -S -L1 -R2 -T64 -D30 -M50 -X2 -Z19 -U -G????? -J ' +
                '"a.flif" "b.flif"',
            arguments: [
                {
                    input: 'a.flif',
                    output: 'b.flif',
                    async: true,
                    overwrite: true,         // -o for true
                    effort: 100,             // -E100
                    interlace: true,         // -I for true | -N for false | empty string for auto
                    encodeQuality: 100,      // -Q100
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
                    guess: {                 // -G????? | -G012X? | etc.
                        y: 'heuristically',  // -G? heuristically | -G0 avg | -G1 median_grad | -G2 median_nb | -GX mixed
                        co: 'heuristically',
                        cg: 'heuristically',
                        alpha: 'heuristically',
                        lookback: 'heuristically'
                    },
                    alphaGuess: 'average',   // -H0 | -H1 | -H2 | (only if keepAlpha is false)
                    chromaSubsample: true,   // -J
                    frameDelay: [100],       // -F100

                    // Decode
                    decodeQuality: 81,       // -q81
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
