/* eslint-disable no-regex-spaces */

/*
var encodeParams = {
    // Required encoding parameters
    input: '/path/to/input-file.png',    // Must end in one of these: .png, .pnm, .ppm, .pgm, .pbm, .pam
    output: '/path/to/output-file.flif', // Must end in .flif
    // Common optional encoding parameters
    async: true,            // Set to false to run this as a synchronous encoding
    overwrite: false,       // Set to true to overwrite existing files on output (default is false)
    effort: 60,             // 0 = fast/poor compression, 100 = slowest/best? (default is 60)
    interlace: 'auto',      // true, false, or 'auto' (interlacing except on tiny images) (default is 'auto')
    encodeQuality: 100,     // 0-100, where 99 and below are lossy (default is 100)
    keepAlpha: false,       // Stores the original RGB data with 0 alpha (transparent) (default is false)
    crc: true,              // Set to false to skip verifying/adding CRC (default is true)
    keepMetaData: true,     // Set to false to strip EXIF/XMP metadata (default is true)
    keepColorProfile: true, // Set to false to strip ICC color profile (default is true)
    keepPalette: false,     // Set to true to keep the existing PNG pallete. (default is false)
    frameDelay: 100,        // Pass in a single number or an array of numbers for animations. (default is 100)
    // Advanced optional encoding parameters
    maxPaletteSize: 512,    // Max number of colors to store in a FLIF palette. PNG/GIF use 256. (FLIF default is 512)
    colorBuckets: 'auto',   // true, false, or 'auto' (default is 'auto')
    channelCompact: true,   // true or false (default is true)
    ycocg: true,            // false will disable YCoCg transform and use G(R-G)(B-G) (default is true)
    subtractGreen: true,    // false will disable YCoCg and SubtractGreen transform and use GRB (default is true)
    frameShape: true,       // false will disable Frame_Shape transform (default is true)
    maxFrameLookBack: 1,    // Max number of frames for Frame_Lookback (default is 1)
    maniacRepeats: 2,       // MANIAC learning iterations; (default is 2)
    maniacThreshold: 64,    // MANIAC tree growth split threshold, in bits saved (default is 64)
    maniacDivisor: 30,      // MANIAC inner node count divisor (default is 30)
    maniacMinSize: 50,      // MANIAC post-pruning threshold; (default is 50)
    chanceCutoff: 2,        // Minimum chance, 0-4096 (default is 2)
    chanceAlpha: 19,        // Chance decay factor (default is 19)
    adaptive: false,        // true will apply an adaptive lossy encoding, 2nd input image is saliency map (default is false)
    guess: 'heuristically', // Pixel predictor for each plane (Y, Co, Cg, Alpha, Lookback)
                            // 'avgerage', 'median gradient', 'median number', 'mixed', defualt is 'heuristically'
    alphaGuess: 'heuristically', // predictor for invisible pixels (only if keepAlpha is false)
    chromaSubsample: false  // true to write an incomplete 4:2:0 chroma subsampled lossy FLIF file (default is false)
};

 Advanced encode options: (mostly useful for flifcrushing)
   -P, --max-palette-size=N    max size for Palette(_Alpha); default: -P512
   -A, --force-color-buckets   force Color_Buckets transform
   -B, --no-color-buckets      disable Color_Buckets transform
   -C, --no-channel-compact    disable Channel_Compact transform
   -Y, --no-ycocg              disable YCoCg transform; use G(R-G)(B-G)
   -W, --no-subtract-green     disable YCoCg and SubtractGreen transform; use GRB
   -S, --no-frame-shape        disable Frame_Shape transform
   -L, --max-frame-lookback=N  max nb of frames for Frame_Lookback; default: -L1
   -R, --maniac-repeats=N      MANIAC learning iterations; default: -R2
   -T, --maniac-threshold=N    MANIAC tree growth split threshold, in bits saved; default: -T64
   -D, --maniac-divisor=N      MANIAC inner node count divisor; default: -D30
   -M, --maniac-min-size=N     MANIAC post-pruning threshold; default: -M50
   -X, --chance-cutoff=N       minimum chance (N/4096); default: -X2
   -Z, --chance-alpha=N        chance decay factor; default: -Z19
   -U, --adaptive              adaptive lossy, second input image is saliency map
   -G, --guess=N[N..]          pixel predictor for each plane (Y,Co,Cg,Alpha,Lookback)
                               ?=pick heuristically, 0=avg, 1=median_grad, 2=median_nb, X=mixed
   -H, --invisible-guess=N     predictor for invisible pixels (only if -K is not used)
   -J, --chroma-subsample      write an incomplete 4:2:0 chroma subsampled FLIF file (lossy!)
*/

/**
 * Converts JSON params for encoding into CLI arguments
 * @param  {object}  params       Parameters for the encoding passed in by the user.
 * @param  {boolean} skipWarnings If true, then helpful warning messages will not be displayed.
 * @return {string}               The built args to be sent to the command line.
 */
function buildEncodeArgs (params, skipWarnings) {
    var advancedEncode = require('./argumentGroups/advancedEncode.js');
    var commonEncodeDecode = require('./argumentGroups/commonEncodeDecode.js');
    var commonEncode = require('./argumentGroups/commonEncode.js');
    var verifyParams = require('../helpers/verifyParams.js');

    var paramsWereVerified = verifyParams(params, 'encode', skipWarnings);
    if (!paramsWereVerified) {
        return false;
    }

    var input = params.input;
    var output = params.output;
    var options = [
        commonEncodeDecode(params),
        commonEncode(params),
        advancedEncode(params)
    ].join(' ');

    // -e -c       -R100 -H0 "a.flif" "b.png"
    var args = '-e ' + options + ' "' + input + '" "' + output + '"';
    // -e -c -R100 -H0 "a.flif" "b.png"
    args = args.replace(/  +/g, ' ');
    args = args.trim();

    return args;
}

module.exports = buildEncodeArgs;

