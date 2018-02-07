/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyAdaptive (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

    function hasFileExtension () {
        var hasExtension = false;
        var file = params.adaptive;
        if (typeof(file) === 'string') {
            file = file.toLowerCase();
            if (file.endsWith('.png') ||
                file.endsWith('.pnm') ||
                file.endsWith('.ppm') ||
                file.endsWith('.pgm') ||
                file.endsWith('.pbm') ||
                file.endsWith('.pam')
            ) {
                hasExtension = true;
            }
        }
        return hasExtension;
    }

    if (
        params.adaptive === null ||
        params.adaptive === false ||
        params.adaptive && typeof(params.input) !== 'string' && params.input.length !== 1 ||
        params.adaptive && !hasFileExtension()
    ) {
        warnUser(
            'The adaptive parameter must be a string file path.\n' +
            'The adaptive file path should point to a saliency map for lossy\n' +
            'encoding that ends in .png, .pnm, .ppm, .pgm, .pbm, or .pam.\n' +
            'Adaptive encoding only accepts one input (no animations).',
            skipWarnings
        );
        return false;
    }

    if (params.adaptive && hasFileExtension() && src === 'decode') {
        warnUser('The adaptive parameter only works on encodes and transcodes.', skipWarnings);
        return false;
    }

    if (
        params.adaptive && hasFileExtension() && typeof(params.encodeQuality) !== 'number' ||
        params.adaptive && hasFileExtension() && params.encodeQuality && params.encodeQuality > 99
    ) {
        warnUser(
            'The adaptive parameter can only be applied when the encodeQuality\n' +
            'parameter is set to 99 or below (lossy).',
            skipWarnings
        );
        return false;
    }

    return true;
}

module.exports = verifyAdaptive;
