/* eslint-disable no-regex-spaces */
/* eslint-disable no-unused-vars */

/**
 * Commonly used arguments used for Encodes.
 * @param  {object}  params Parameters for the encoding passed in by the user.
 * @return {string}         The arguments to be passed into the CLI
 */
function commonEncode (params) {
    var encodeQuality = '';
    var effort = '';
    var interlace = '';
    var keepAlpha = '';
    var frameDelay = '';

    if (parseInt(params.quality, 10) < 101) {
        encodeQuality = '-Q' + parseInt(params.quality, 10);
    }
    if (parseInt(params.encodeQuality, 10) < 101) {
        encodeQuality = '-Q' + parseInt(params.encodeQuality, 10);
    }
    if (parseInt(params.effort) < 101) {
        effort = '-E' + parseInt(params.effort);
    }
    if (params.interlace === false) {
        interlace = '-N';
    }
    if (params.interlace === true) {
        interlace = '-I';
    }
    if (params.interlace === 'auto') {
        interlace = '';
    }
    if (params.keepAlpha === true) {
        keepAlpha = '-K';
    }
    if (params.frameDelay) {
        frameDelay = '-F' + params.frameDelay.join(',');
    }

    var arguments = [
        effort,
        interlace,
        encodeQuality,
        keepAlpha,
        frameDelay
    ].join(' ');

    arguments = arguments.replace(/  +/g, ' ');
    arguments = arguments.trim();

    return arguments;
}

module.exports = commonEncode;
