/* eslint-disable no-console */

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
function decode (params) {
    var verifyParams = require('../helpers/verifyparams.js');
    verifyParams(params, 'decode');
    console.log(params);
}

module.exports = decode;


