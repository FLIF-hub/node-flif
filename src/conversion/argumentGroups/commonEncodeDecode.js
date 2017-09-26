/* eslint-disable no-regex-spaces */

/**
 * Commonly used arguments used by both Encodes and Decodes.
 * @param  {object}  params Parameters for the **coding passed in by the user.
 * @return {string}         The arguments to be passed into the CLI
 */
function commonEncodeDecode (params) {
    var crc = '';
    var keepMetaData = '';
    var keepColorProfile = '';
    var overwrite = '';
    var keepPalette = '';

    // Common (Encode/Decode)
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
    if (params.keepPalette === true) {
        keepPalette = '-k';
    }

    var args = [
        crc,
        keepMetaData,
        keepColorProfile,
        overwrite,
        keepPalette
    ].join(' ');

    args = args.replace(/  +/g, ' ');
    args = args.trim();

    return args;
}

module.exports = commonEncodeDecode;
