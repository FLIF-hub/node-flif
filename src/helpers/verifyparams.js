/**
 * Verify that the passed in parameters are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */

function verifyParams (params, src, skipWarnings) {
    var warnUser = require('./warnUser.js');


    // ///////////////////// //
    //  Validate Parameters  //
    // ///////////////////// //

    var ensureParamsExist = require('./verifyParams/ensureParamsExist.js');
    var ensuredParamsExist = ensureParamsExist(params, src, skipWarnings);
    if (!ensuredParamsExist) {
        return false;
    }


    // /////////////////////// //
    //  Validate input/output  //
    // /////////////////////// //

    var ensureInputOutputExist = require('./verifyParams/ensureInputOutputExist.js');
    var ensuredInputOutputExist = ensureInputOutputExist(params, src, skipWarnings);
    if (!ensuredInputOutputExist) {
        return false;
    }


    // /////////////////////////// //
    //  Validating Common Options  //
    // /////////////////////////// //

    var verifyAsync = require('./verifyParams/verifyAsync.js');
    var verifiedAsync = verifyAsync(params, src, skipWarnings);
    if (!verifiedAsync) {
        return false;
    }

    if (
        params.overwrite === null ||
        params.overwrite &&
        typeof(params.overwrite) !== 'boolean'
    ) {
        warnUser('The overwrite parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.quality === null ||
        params.quality === false ||
        params.quality &&
        typeof(params.quality) !== 'number' ||
        params.quality &&
        (
            params.quality > 100 ||
            params.quality < 0 ||
            // check if whole number
            params.quality % 1 !== 0
        )
    ) {
        warnUser('The quality parameter must be a whole number between 0 and 100.', skipWarnings);
        return false;
    }

    if (
        params.keepMetaData === null ||
        params.keepMetaData &&
        typeof(params.keepMetaData) !== 'boolean'
    ) {
        warnUser('The keepMetaData parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.keepColorProfile === null ||
        params.keepColorProfile &&
        typeof(params.keepColorProfile) !== 'boolean'
    ) {
        warnUser('The keepColorProfile parameter must be a boolean value.', skipWarnings);
        return false;
    }

    // ///////////////////////////// //
    //  Validating Advanced Options  //
    // ///////////////////////////// //

    if (
        params.crc === null ||
        params.crc &&
        typeof(params.crc) !== 'boolean'
    ) {
        warnUser('The crc parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.keepPalette === null ||
        params.keepPalette &&
        typeof(params.keepPalette) !== 'boolean'
    ) {
        warnUser('The keepPalette parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.scale === null ||
        params.scale === false ||
        params.scale &&
        typeof(params.scale) !== 'number' ||
        params.scale &&
        (
            params.scale !== 1 &&
            params.scale !== 2 &&
            params.scale !== 4 &&
            params.scale !== 8 &&
            params.scale !== 16 &&
            params.scale !== 32
        )
    ) {
        warnUser('The scale parameter must be one of the following numbers: 1, 2, 4, 8, 16, 32.', skipWarnings);
        return false;
    }

    if (params.resize && typeof(params.resize) !== 'object') {
        warnUser('The resize parameter must be a object.', skipWarnings);
        return false;
    }

    if (
        params.resize === null ||
        params.resize === false ||
        params.resize &&
        (
            Object.keys(params.resize).length !== 2 ||
            params.resize.width === false ||
            params.resize.height === false ||
            params.resize.width === true ||
            params.resize.height === true ||
            isNaN(parseInt(params.resize.width)) ||
            isNaN(parseInt(params.resize.height)) ||
            params.resize.width < 0 ||
            params.resize.height < 0
        )
    ) {
        warnUser('The resize parameter should be an object. Example: { width: 320, height: 240 }.', skipWarnings);
        return false;
    }

    if (params.fit && typeof(params.fit) !== 'object') {
        warnUser('The fit parameter must be a object.', skipWarnings);
        return false;
    }

    if (
        params.fit === null ||
        params.fit === false ||
        params.fit &&
        (
            Object.keys(params.fit).length !== 2 ||
            params.fit.width === false ||
            params.fit.height === false ||
            params.fit.width === true ||
            params.fit.height === true ||
            isNaN(parseInt(params.fit.width)) ||
            isNaN(parseInt(params.fit.height)) ||
            params.fit.width < 0 ||
            params.fit.height < 0
        )
    ) {
        warnUser('The fit parameter should be an object. Example: { width: 320, height: 240 }.', skipWarnings);
        return false;
    }

    if (
        params.effort === null ||
        params.effort === false ||
        params.effort &&
        typeof(params.effort) !== 'number' ||
        typeof(params.effort) === 'number' &&
        (
            params.effort > 100 ||
            params.effort < 0 ||
            // check if whole number
            params.effort % 1 !== 0
        ) ||
        typeof(params.effort) === 'number' && src === 'decode'
    ) {
        warnUser('The effort parameter must be a whole number between 0 and 100.', skipWarnings);
        return false;
    }

    if (
        params.interlace === null ||
        typeof(params.interlace) === 'object' ||
        typeof(params.interlace) === 'number' ||
        (
            typeof(params.interlace) === 'boolean' &&
            params.interlace !== false &&
            params.interlace !== true
        ) ||
        (
            typeof(params.interlace) === 'string' &&
            params.interlace !== 'auto'
        ) ||
        src === 'decode' && params.interlace === false ||
        src === 'decode' && params.interlace === true ||
        src === 'decode' && params.interlace === 'auto'
    ) {
        warnUser('The interlace parameter must be set to true, false, or "auto".', skipWarnings);
        return false;
    }

    if (
        params.keepAlpha === null ||
        params.keepAlpha &&
        typeof(params.keepAlpha) !== 'boolean' ||
        src === 'decode' && params.keepAlpha === false ||
        src === 'decode' && params.keepAlpha === true
    ) {
        warnUser('The keepAlpha parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.frameDelay === null ||
        params.frameDelay === false ||
        params.frameDelay === true ||
        params.frameDelay && src === 'decode' ||
        params.frameDelay && typeof(params.frameDelay) !== 'object' ||
        params.frameDelay && !Array.isArray(params.frameDelay)
    ) {
        warnUser('The frameDelay parameter must be an array of numbers like [100] or [100, 250].', skipWarnings);
        return false;
    }

    if (params.frameDelay && params.frameDelay.length > 0) {
        for (var i = 0; i < params.frameDelay.length; i++) {
            var item = params.frameDelay[i];
            if (
                typeof(item) !== 'number' ||
                item === undefined ||
                item < 0
            ) {
                warnUser('The frameDelay parameter must be an array of numbers like [100] or [100, 250].', skipWarnings);
                return false;
            }
        }
    }

    if (
        params.maxPaletteSize === false ||
        params.maxPaletteSize === true ||
        params.maxPaletteSize === null ||
        params.maxPaletteSize && typeof(params.maxPaletteSize) !== 'number' ||
        typeof(params.maxPaletteSize) === 'number' && params.maxPaletteSize < 2 ||
        typeof(params.maxPaletteSize) === 'number' && params.maxPaletteSize % 1 !== 0
    ) {
        warnUser('The maxPaletteSize parameter must be a number equal to or greater than 2.', skipWarnings);
        return false;
    }

    if (
        params.colorBuckets === null ||
        typeof(params.colorBuckets) === 'object' ||
        typeof(params.colorBuckets) === 'number' ||
        (
            typeof(params.colorBuckets) === 'boolean' &&
            params.colorBuckets !== false &&
            params.colorBuckets !== true
        ) ||
        (
            typeof(params.colorBuckets) === 'string' &&
            params.colorBuckets !== 'auto'
        ) ||
        src === 'decode' && params.colorBuckets === false ||
        src === 'decode' && params.colorBuckets === true ||
        src === 'decode' && params.colorBuckets === 'auto'
    ) {
        warnUser('The colorBuckets parameter must be set to true, false, or "auto".', skipWarnings);
        return false;
    }

    if (
        params.channelCompact === null ||
        params.channelCompact &&
        typeof(params.channelCompact) !== 'boolean' ||
        src === 'decode' && params.channelCompact === false ||
        src === 'decode' && params.channelCompact === true
    ) {
        warnUser('The channelCompact parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.ycocg === null ||
        params.ycocg &&
        typeof(params.ycocg) !== 'boolean' ||
        src === 'decode' && params.ycocg === false ||
        src === 'decode' && params.ycocg === true
    ) {
        warnUser('The ycocg parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.subtractGreen === null ||
        params.subtractGreen &&
        typeof(params.subtractGreen) !== 'boolean' ||
        src === 'decode' && params.subtractGreen === false ||
        src === 'decode' && params.subtractGreen === true
    ) {
        warnUser('The subtractGreen parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.frameShape === null ||
        params.frameShape &&
        typeof(params.frameShape) !== 'boolean' ||
        src === 'decode' && params.frameShape === false ||
        src === 'decode' && params.frameShape === true
    ) {
        warnUser('The frameShape parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.maxFrameLookBack === false ||
        params.maxFrameLookBack === true ||
        params.maxFrameLookBack === null ||
        params.maxFrameLookBack && typeof(params.maxFrameLookBack) !== 'number' ||
        typeof(params.maxFrameLookBack) === 'number' && params.maxFrameLookBack < 1 ||
        typeof(params.maxFrameLookBack) === 'number' && params.maxFrameLookBack % 1 !== 0 ||
        typeof(params.maxFrameLookBack) === 'number' && src === 'decode'
    ) {
        warnUser('The maxFrameLookBack parameter must be a number greater than 0.', skipWarnings);
        return false;
    }

    if (
        params.maniacRepeats === false ||
        params.maniacRepeats === true ||
        params.maniacRepeats === null ||
        params.maniacRepeats && typeof(params.maniacRepeats) !== 'number' ||
        typeof(params.maniacRepeats) === 'number' && params.maniacRepeats < 1 ||
        typeof(params.maniacRepeats) === 'number' && params.maniacRepeats % 1 !== 0 ||
        typeof(params.maniacRepeats) === 'number' && src === 'decode'
    ) {
        warnUser('The maniacRepeats parameter must be a number greater than 0.', skipWarnings);
        return false;
    }

    if (
        params.maniacThreshold === false ||
        params.maniacThreshold === true ||
        params.maniacThreshold === null ||
        params.maniacThreshold && typeof(params.maniacThreshold) !== 'number' ||
        typeof(params.maniacThreshold) === 'number' && params.maniacThreshold < 0 ||
        typeof(params.maniacThreshold) === 'number' && params.maniacThreshold % 1 !== 0 ||
        typeof(params.maniacThreshold) === 'number' && src === 'decode'
    ) {
        warnUser('The maniacThreshold parameter must be a number greater than or equal to 0.', skipWarnings);
        return false;
    }

    if (
        params.maniacDivisor === false ||
        params.maniacDivisor === true ||
        params.maniacDivisor === null ||
        params.maniacDivisor && typeof(params.maniacDivisor) !== 'number' ||
        typeof(params.maniacDivisor) === 'number' && params.maniacDivisor < 1 ||
        typeof(params.maniacDivisor) === 'number' && params.maniacDivisor % 1 !== 0 ||
        typeof(params.maniacDivisor) === 'number' && src === 'decode'
    ) {
        warnUser('The maniacDivisor parameter must be a number greater than 0.', skipWarnings);
        return false;
    }

    if (
        params.maniacMinSize === false ||
        params.maniacMinSize === true ||
        params.maniacMinSize === null ||
        params.maniacMinSize && typeof(params.maniacMinSize) !== 'number' ||
        typeof(params.maniacMinSize) === 'number' && params.maniacMinSize < 1 ||
        typeof(params.maniacMinSize) === 'number' && params.maniacMinSize % 1 !== 0 ||
        typeof(params.maniacMinSize) === 'number' && src === 'decode'
    ) {
        warnUser('The maniacMinSize parameter must be a number greater than 0.', skipWarnings);
        return false;
    }

    if (
        params.chanceCutoff === false ||
        params.chanceCutoff === true ||
        params.chanceCutoff === null ||
        params.chanceCutoff && typeof(params.chanceCutoff) !== 'number' ||
        typeof(params.chanceCutoff) === 'number' && params.chanceCutoff < 1 ||
        typeof(params.chanceCutoff) === 'number' && params.chanceCutoff % 1 !== 0 ||
        typeof(params.chanceCutoff) === 'number' && src === 'decode'
    ) {
        warnUser('The chanceCutoff parameter must be a number greater than 0.', skipWarnings);
        return false;
    }

    if (
        params.chanceAlpha === false ||
        params.chanceAlpha === true ||
        params.chanceAlpha === null ||
        params.chanceAlpha && typeof(params.chanceAlpha) !== 'number' ||
        typeof(params.chanceAlpha) === 'number' && params.chanceAlpha < 1 ||
        typeof(params.chanceAlpha) === 'number' && params.chanceAlpha % 1 !== 0 ||
        typeof(params.chanceAlpha) === 'number' && src === 'decode'
    ) {
        warnUser('The chanceAlpha parameter must be a number greater than 0.', skipWarnings);
        return false;
    }

    if (
        params.adaptive === null ||
        params.adaptive &&
        typeof(params.adaptive) !== 'boolean' ||
        src === 'decode' && params.adaptive === false ||
        src === 'decode' && params.adaptive === true
    ) {
        warnUser('The adaptive parameter must be a boolean value.', skipWarnings);
        return false;
    }

    if (
        params.guess === false ||
        params.guess === true ||
        params.guess === null ||
        params.guess && typeof(params.guess) !== 'string' ||
        params.guess && src === 'decode' ||
        params.guess && (
            params.guess !== 'heuristically' &&
            params.guess !== 'average' &&
            params.guess !== 'median gradient' &&
            params.guess !== 'median number' &&
            params.guess !== 'mixed'
        )
    ) {
        warnUser('The guess parameter must one of the following: "heuristically", "average", "median gradient", "median number", "mixed".', skipWarnings);
        return false;
    }

    if (
        params.alphaGuess === false ||
        params.alphaGuess === true ||
        params.alphaGuess === null ||
        params.alphaGuess && typeof(params.alphaGuess) !== 'string' ||
        params.alphaGuess && src === 'decode' ||
        params.alphaGuess && (
            params.alphaGuess !== 'heuristically' &&
            params.alphaGuess !== 'average' &&
            params.alphaGuess !== 'median gradient' &&
            params.alphaGuess !== 'median number' &&
            params.alphaGuess !== 'mixed'
        )
    ) {
        warnUser('The alphaGuess parameter must one of the following: "heuristically", "average", "median gradient", "median number", "mixed".', skipWarnings);
        return false;
    }

    if (
        params.chromaSubsample === null ||
        params.chromaSubsample &&
        typeof(params.chromaSubsample) !== 'boolean' ||
        src === 'decode' && params.chromaSubsample === false ||
        src === 'decode' && params.chromaSubsample === true
    ) {
        warnUser('The chromaSubsample parameter must be a boolean value.', skipWarnings);
        return false;
    }

    // TODO:
    // 1. Add in the rest of the parameters from encode/transcode for validation
    // 2. Break this file up into a bunch of smaller files for each param with their own tests
    // 3. Ensure that encode-only params fail when passed in to transcode/decode and vice versa

    return true;
}

module.exports = verifyParams;
