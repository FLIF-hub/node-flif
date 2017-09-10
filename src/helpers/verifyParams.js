/* eslint-disable no-multi-spaces */

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

    var ensureParamsExist = require('./verifyParams/ensureParamsExist.js')(params, src, skipWarnings);
    if (!ensureParamsExist) {
        return false;
    }


    // /////////////////////// //
    //  Validate input/output  //
    // /////////////////////// //

    var ensureInputOutputExist = require('./verifyParams/ensureInputOutputExist.js')(params, src, skipWarnings);
    if (!ensureInputOutputExist) {
        return false;
    }


    // /////////////////////////// //
    //  Validating Common Options  //
    // /////////////////////////// //

    var verifyAsync            = require('./verifyParams/verifyAsync.js')(params, src, skipWarnings);
    var verifyOverwrite        = require('./verifyParams/verifyOverwrite.js')(params, src, skipWarnings);
    var verifyQuality          = require('./verifyParams/verifyQuality.js')(params, src, skipWarnings);
    var verifyKeepMetaData     = require('./verifyParams/verifyKeepMetaData.js')(params, src, skipWarnings);
    var verifyKeepColorProfile = require('./verifyParams/verifyKeepColorProfile.js')(params, src, skipWarnings);

    if (
        !verifyAsync ||
        !verifyOverwrite ||
        !verifyQuality ||
        !verifyKeepMetaData ||
        !verifyKeepColorProfile
    ) {
        return false;
    }

    // ///////////////////////////// //
    //  Validating Advanced Options  //
    // ///////////////////////////// //

    var verifyCRC              = require('./verifyParams/verifyCRC.js')(params, src, skipWarnings);
    var verifyKeepPalette      = require('./verifyParams/verifyKeepPalette.js')(params, src, skipWarnings);
    var verifyScale            = require('./verifyParams/verifyScale.js')(params, src, skipWarnings);
    var verifyResize           = require('./verifyParams/verifyResize.js')(params, src, skipWarnings);
    var verifyFit              = require('./verifyParams/verifyFit.js')(params, src, skipWarnings);
    var verifyEffort           = require('./verifyParams/verifyEffort.js')(params, src, skipWarnings);
    var verifyInterlace        = require('./verifyParams/verifyInterlace.js')(params, src, skipWarnings);
    var verifyKeepAlpha        = require('./verifyParams/verifyKeepAlpha.js')(params, src, skipWarnings);
    var verifyFrameDelay       = require('./verifyParams/verifyFrameDelay.js')(params, src, skipWarnings);
    var verifyMaxPaletteSize   = require('./verifyParams/verifyMaxPaletteSize.js')(params, src, skipWarnings);
    var verifyColorBuckets     = require('./verifyParams/verifyColorBuckets.js')(params, src, skipWarnings);
    var verifyChannelCompact   = require('./verifyParams/verifyChannelCompact.js')(params, src, skipWarnings);
    var verifyYcocg            = require('./verifyParams/verifyYcocg.js')(params, src, skipWarnings);
    var verifySubtractGreen    = require('./verifyParams/verifySubtractGreen.js')(params, src, skipWarnings);
    var verifyFrameShape       = require('./verifyParams/verifyFrameShape.js')(params, src, skipWarnings);
    var verifyMaxFrameLookBack = require('./verifyParams/verifyMaxFrameLookBack.js')(params, src, skipWarnings);
    var verifyManiacRepeats    = require('./verifyParams/verifyManiacRepeats.js')(params, src, skipWarnings);
    var verifyManiacThreshold  = require('./verifyParams/verifyManiacThreshold.js')(params, src, skipWarnings);
    var verifyManiacDivisor    = require('./verifyParams/verifyManiacDivisor.js')(params, src, skipWarnings);
    var verifyManiacMinSize    = require('./verifyParams/verifyManiacMinSize.js')(params, src, skipWarnings);

    if (
        !verifyCRC ||
        !verifyKeepPalette ||
        !verifyScale ||
        !verifyResize ||
        !verifyFit ||
        !verifyEffort ||
        !verifyInterlace ||
        !verifyKeepAlpha ||
        !verifyFrameDelay ||
        !verifyMaxPaletteSize ||
        !verifyColorBuckets ||
        !verifyChannelCompact ||
        !verifyYcocg ||
        !verifySubtractGreen ||
        !verifyFrameShape ||
        !verifyMaxFrameLookBack ||
        !verifyManiacRepeats ||
        !verifyManiacThreshold ||
        !verifyManiacDivisor ||
        !verifyManiacMinSize
    ) {
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

    var verifyChromaSubsample = require('./verifyParams/verifyChromaSubsample.js')(params, src, skipWarnings);
    if (!verifyChromaSubsample) {
        return false;
    }

    // TODO:
    // 1. Add in the rest of the parameters from encode/transcode for validation
    // 2. Break this file up into a bunch of smaller files for each param with their own tests
    // 3. Ensure that encode-only params fail when passed in to transcode/decode and vice versa

    return true;
}

module.exports = verifyParams;
