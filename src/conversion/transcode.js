/* eslint-disable no-regex-spaces */

/*
var encodeParams = {
    // Required encoding parameters
    input: '/path/to/input-file.flif',   // Must end in .flif
    output: '/path/to/output-file.flif', // Must end in .flif

    // Common optional encoding parameters
    async: true,            // Set to false to run this as a synchronous encoding
    overwrite: false,       // Set to true to overwrite existing files on output (default is false)
    effort: 60,             // 0 = fast/poor compression, 100 = slowest/best? (default is 60)
    interlace: 'auto',      // true, false, or 'auto' (interlacing except on tiny images) (default is 'auto')
    quality: 100,           // 0-100, where 99 and below are lossy (default is 100)
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


*/

/*
 flif -t [decode options] [encode options] <input.flif> <output.flif>

 General Options:
   -c, --no-crc                don't verify the CRC (or don't add a CRC)
   -m, --no-metadata           strip Exif/XMP metadata (default is to keep it)
   -p, --no-color-profile      strip ICC color profile (default is to keep it)
   -o, --overwrite             overwrite existing files
   -k, --keep-palette          use input PNG palette / write palette PNG if possible

 Encode options: (-e, --encode)
   -E, --effort=N              0=fast/poor compression, 100=slowest/best? (default: -E60)
   -I, --interlace             interlacing (default, except for tiny images)
   -N, --no-interlace          force no interlacing
   -Q, --lossy=N               lossy compression; default: -Q100 (lossless)
   -K, --keep-invisible-rgb    store original RGB values behind A=0
   -F, --frame-delay=N[,N,..]  delay between animation frames in ms; default: -F100

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

 Decode options: (-d, --decode)
   -q, --quality=N            lossy decode quality percentage; default -q100
   -s, --scale=N              lossy downscaled image at scale 1:N (2,4,8,16,32); default -s1
   -r, --resize=WxH           lossy downscaled image to fit inside WxH (but typically smaller)
   -f, --fit=WxH              lossy downscaled image to exactly WxH
*/

/**
 * Transcodes your FLIF to a new FLIF.
 * @param  {object}  params Parameters for the transcoding passed in by the user.
 * @return {string}         The arguments to be passed into the CLI
 */
function transcode (params) {
    var advancedEncode = require('./argumentsGroups/advancedEncode.js');
    var commonEncodeDecode = require('./argumentsGroups/commonEncodeDecode.js');
    var commonEncode = require('./argumentsGroups/commonEncode.js');
    var commonDecode = require('./argumentsGroups/commonDecode.js');
    var verifyParams = require('../helpers/verifyParams.js');

    var paramsWereVerified = verifyParams(params, 'transcode');
    if (!paramsWereVerified) {
        return false;
    }

    // Required
    var input = params.input;
    var output = params.output;
    var options = [
        commonEncodeDecode(params),
        commonEncode(params),
        commonDecode(params),
        advancedEncode(params)
    ].join(' ');

    // -t -c -m -p -o -k -q=100 -s=2 -r=100x100 -f=100x100 "a.flif" "b.flif"
    var arguments = '-t ' + options + ' "' + input + '" "' + output + '"';
    // -t -c -m        -s=2   -f=100x100 "a.flif" "b.flif" ==> -t -c -m -s=2 -f=100x100 "a.flif" "b.flif"
    arguments = arguments.replace(/  +/g, ' ');
    arguments = arguments.trim();

    return arguments;
}

module.exports = transcode;
