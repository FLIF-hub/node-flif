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
    var disallowQuality        = require('./verifyParams/disallowQuality.js')(params, src, skipWarnings);
    var verifyEncodeQuality    = require('./verifyParams/verifyEncodeQuality.js')(params, src, skipWarnings);
    var verifyDecodeQuality    = require('./verifyParams/verifyDecodeQuality.js')(params, src, skipWarnings);
    var verifyKeepMetaData     = require('./verifyParams/verifyKeepMetaData.js')(params, src, skipWarnings);
    var verifyKeepColorProfile = require('./verifyParams/verifyKeepColorProfile.js')(params, src, skipWarnings);

    if (
        !verifyAsync ||
        !verifyOverwrite ||
        !disallowQuality ||
        !verifyEncodeQuality ||
        !verifyDecodeQuality ||
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
    var verifyChanceCutoff     = require('./verifyParams/verifyChanceCutoff.js')(params, src, skipWarnings);
    var verifyChanceAlpha      = require('./verifyParams/verifyChanceAlpha.js')(params, src, skipWarnings);
    var verifyAdaptive         = require('./verifyParams/verifyAdaptive.js')(params, src, skipWarnings);
    var verifyGuess            = require('./verifyParams/verifyGuess.js')(params, src, skipWarnings);
    var verifyAlphaGuess       = require('./verifyParams/verifyAlphaGuess.js')(params, src, skipWarnings);
    var verifyChromaSubsample  = require('./verifyParams/verifyChromaSubsample.js')(params, src, skipWarnings);

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
        !verifyManiacMinSize ||
        !verifyChanceCutoff ||
        !verifyChanceAlpha ||
        !verifyAdaptive ||
        !verifyGuess ||
        !verifyAlphaGuess ||
        !verifyChromaSubsample
    ) {
        return false;
    }

    return true;
}

module.exports = verifyParams;
