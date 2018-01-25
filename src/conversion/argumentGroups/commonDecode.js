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

    var args = [
        decodeQuality,
        scale,
        resize,
        fit
    ].join(' ');

    args = args.replace(/  +/g, ' ');
    args = args.trim();

    return args;
}

module.exports = commonDecode;
