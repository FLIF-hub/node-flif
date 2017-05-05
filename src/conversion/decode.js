/* eslint-disable no-console */
/* eslint-disable no-regex-spaces */

/*
 flif -d [decode options] <input.flif> <output.pnm | output.pam | output.png>

 General Options:
   -c, --no-crc                don't verify the CRC (or don't add a CRC)
   -m, --no-metadata           strip Exif/XMP metadata (default is to keep it)
   -p, --no-color-profile      strip ICC color profile (default is to keep it)
   -o, --overwrite             overwrite existing files
   -k, --keep-palette          use input PNG palette / write palette PNG if possible

 Decode options: (-d, --decode)
   -q, --quality=N            lossy decode quality percentage; default -q100
   -s, --scale=N              lossy downscaled image at scale 1:N (2,4,8,16,32); default -s1
   -r, --resize=WxH           lossy downscaled image to fit inside WxH (but typically smaller)
   -f, --fit=WxH              lossy downscaled image to exactly WxH
*/

/**
 * Decodes your FLIF to a PNG, PNM, PPM, PGM, PBM, or PAM.
 * @param  {object}  params Parameters for the decoding passed in by the user.
 *  var sampleDecodeParams = {
        // Required decoding parameters
        input: '/path/to/input-file.flif',  // Must end in .flif
        output: '/path/to/output-file.png', // Must end in one of these: .png, .pnm, .ppm, .pgm, .pbm, .pam
        // Common optional decoding parameters
        overwrite: false,       // Set to true to overwrite existing files on output (default is false)
        quality: 100,           // 0-100 Lossy decode quality (default is 100)
        keepMetaData: true,     // Set to false to strip EXIF/XMP metadata (default is true)
        keepColorProfile: true, // Set to false to strip ICC color profile (default is true)
        // Advanced optional decoding parameters
        crc: true,              // Set to false to skip verifying/adding CRC (default is true)
        keepPalette: false,     // Set to true to keep the existing PNG pallete. (default is false)
        scale: 1,               // Lossy downscaled image at scale 1:N (2,4,8,16,32) (default 1)
        resize: '200x400',      // Lossy downscaled image to fit inside WxH (default uses input dimensions)
        fit: '200x400'          // Lossy downscaled image to exactly WxH (default uses input dimensions)
    };
 * @return {boolean}        True if successful, false if there was a problem.
 */
function decode (params, callback) {
    if (!params) {
        throw 'You must pass parameters into node-flif decode.';
    } else if (callback && typeof(callback) !== 'function') {
        throw 'The second argument in node-flif decode is optional. However, it must be a function if used.';
    }

    var verifyParams = require('../helpers/verifyparams.js');
    var paramsWereVerified = verifyParams(params, 'decode');
    if (!paramsWereVerified) {
        return false;
    }

    var input = params.input;
    var output = params.output;

    var crc = '';
    var keepMetaData = '';
    var keepColorProfile = '';
    var overwrite = '';
    var keepPalette = '';
    var quality = '';
    var scale = '';
    var resize = '';
    var fit = '';

    if (params.crc === false) {
        crc = '-c';
    }
    if (params.keepMetaData === false) {
        keepMetaData = '-m';
    }
    if (params.keepColorProfile === false) {
        keepColorProfile = '-p';
    }
    if (params.overwrite === true) {
        overwrite = '-o';
    }
    if (params.keepPalette === false) {
        keepPalette = '-k';
    }
    if (params.quality) {
        quality = '-q=' + parseInt(params.quality);
    }
    if (params.scale) {
        scale = '-s=' + parseInt(params.scale);
    }
    if (params.resize) {
        resize = '-r=' + parseInt(params.resize.width) + 'x' + parseInt(params.resize.height);
    }
    if (params.fit) {
        fit = '-f=' + parseInt(params.fit.width) + 'x' + parseInt(params.fit.height);
    }

    var options = [
        crc,
        keepMetaData,
        keepColorProfile,
        overwrite,
        keepPalette,
        quality,
        scale,
        resize,
        fit
    ].join(' ');

    // -c -m  -k      -s=2   -f=100x100 ==> -c -m -k -s=2 -f=100x100
    options = options.replace(/  +/g, ' ');
    options = options.trim();

    // -d -c -m -p -o -k -q=100 -s=2 -r=100x100 -f=100x100 "input file.flif" "output file.png"
    var arguments = '-d ' + options + ' "' + input + '" "' + output + '"';

    if (params.async === false) {
        var runCommandSync = require('../helpers/runCommandSync.js');
        return runCommandSync(arguments);
    } else {
        var runCommand = require('../helpers/runCommand.js');
        if (callback && typeof(callback) === 'function') {
            runCommand(arguments, callback);
        } else {
            runCommand(arguments);
        }
    }
}

// TODO: Separate out the building of the args and the running of the command to two different files

module.exports = decode;


