/* eslint-disable no-regex-spaces */

/**
 * Advanced arguments used during Encodes.
 * @param  {object}  params Parameters for the encoding passed in by the user.
 * @return {string}         The arguments to be passed into the CLI
 */
function advancedEncode (params) {
    var maxPaletteSize = '';
    var colorBuckets = '';
    var channelCompact = '';
    var ycocg = '';
    var subtractGreen = '';
    var frameShape = '';
    var maxFrameLookBack = '';
    var maniacRepeats = '';
    var maniacThreshold = '';
    var maniacDivisor = '';
    var maniacMinSize = '';
    var chanceCutoff = '';
    var chanceAlpha = '';
    var adaptive = '';
    var guess = '';
    var alphaGuess = '';
    var chromaSubsample = '';

    if (params.maxPaletteSize) {
        maxPaletteSize = '-P' + parseInt(params.maxPaletteSize);
    }
    if (params.colorBuckets === false) {
        colorBuckets = '-B';
    }
    if (params.colorBuckets === true) {
        colorBuckets = '-A';
    }
    if (params.colorBuckets === 'auto') {
        colorBuckets = '';
    }
    if (params.channelCompact === false) {
        channelCompact = '-C';
    }
    if (params.ycocg === false) {
        ycocg = '-Y';
    }
    if (params.subtractGreen === false) {
        subtractGreen = '-W';
    }
    if (params.frameShape === false) {
        frameShape = '-S';
    }
    if (params.maxFrameLookBack) {
        maxFrameLookBack = '-L' + parseInt(params.maxFrameLookBack);
    }
    if (params.maniacRepeats) {
        maniacRepeats = '-R' + parseInt(params.maniacRepeats);
    }
    if (parseInt(params.maniacThreshold) > -1) {
        maniacThreshold = '-T' + parseInt(params.maniacThreshold);
    }
    if (params.maniacDivisor) {
        maniacDivisor = '-D' + parseInt(params.maniacDivisor);
    }
    if (params.maniacMinSize) {
        maniacMinSize = '-M' + parseInt(params.maniacMinSize);
    }
    if (params.chanceCutoff) {
        chanceCutoff = '-X' + parseInt(params.chanceCutoff);
    }
    if (params.chanceAlpha) {
        chanceAlpha = '-Z' + parseInt(params.chanceAlpha);
    }
    if (params.adaptive === true) {
        adaptive = '-U';
    }
    if (params.guess === 'heuristically') {
        guess = '-G?';
    }
    if (params.guess === 'average') {
        guess = '-G0';
    }
    if (params.guess === 'median gradient') {
        guess = '-G1';
    }
    if (params.guess === 'median number') {
        guess = '-G2';
    }
    if (params.guess === 'mixed') {
        guess = '-GX';
    }
    if (!params.keepAlpha) {
        if (params.alphaGuess === 'heuristically') {
            alphaGuess = '-H?';
        }
        if (params.alphaGuess === 'average') {
            alphaGuess = '-H0';
        }
        if (params.alphaGuess === 'median gradient') {
            alphaGuess = '-H1';
        }
        if (params.alphaGuess === 'median number') {
            alphaGuess = '-H2';
        }
        if (params.alphaGuess === 'mixed') {
            alphaGuess = '-HX';
        }
    }
    if (params.chromaSubsample === true) {
        chromaSubsample = '-J';
    }

    var args = [
        maxPaletteSize,
        colorBuckets,
        channelCompact,
        ycocg,
        subtractGreen,
        frameShape,
        maxFrameLookBack,
        maniacRepeats,
        maniacThreshold,
        maniacDivisor,
        maniacMinSize,
        chanceCutoff,
        chanceAlpha,
        adaptive,
        guess,
        alphaGuess,
        chromaSubsample
    ].join(' ');

    args = args.replace(/  +/g, ' ');
    args = args.trim();

    return args;
}

module.exports = advancedEncode;
