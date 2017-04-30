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
 * @return {boolean}        True if successful, false if there was a problem.
 */
function decode (params) {
    var verifyParams = require('../helpers/verifyparams.js');
    verifyParams(params, 'decode');
    console.log(params);
}

module.exports = decode;
