/* eslint-disable no-regex-spaces */

/**
 * Commonly used arguments used during Decodes.
 * @param  {object}  params Parameters for the decoding passed in by the user.
 * @return {string}         The arguments to be passed into the CLI
 */
function commonDecode (params) {
    var decodeQuality = '';
    var scale = '';
    var resize = '';
    var fit = '';

    if (parseInt(params.quality, 10) < 101) {
        decodeQuality = '-q=' + parseInt(params.quality, 10);
    }
    if (parseInt(params.decodeQuality) < 101) {
        decodeQuality = '-q=' + parseInt(params.decodeQuality);
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

    var arguments = [
        decodeQuality,
        scale,
        resize,
        fit
    ].join(' ');

    arguments = arguments.replace(/  +/g, ' ');
    arguments = arguments.trim();

    return arguments;
}

module.exports = commonDecode;
