/* eslint-disable no-console */
/* eslint-disable no-regex-spaces */

/**
 * Converts JSON params for decoding into CLI arguments
 * @param  {object}  params  Parameters for the decoding passed in by the user.
 * @return {string}          The built args to be sent to the command line.
 */
function buildDecodeArgs (params) {
    var verifyParams = require('../helpers/verifyParams.js');
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
    if (params.keepPalette === true) {
        keepPalette = '-k';
    }
    if (parseInt(params.quality) < 101) {
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

    // -d -c -m -p -o -k -q=100 -s=2 -r=100x100 -f=100x100 "input file.flif" "output file.png"
    var arguments = '-d ' + options + ' "' + input + '" "' + output + '"';
    // -d -c -m        -s=2   -f=100x100 "a.flif" "b.flif" ==> -d -c -m -s=2 -f=100x100 "a.flif" "b.flif"
    arguments = arguments.replace(/  +/g, ' ');
    arguments = arguments.trim();

    return arguments;
}

module.exports = buildDecodeArgs;
