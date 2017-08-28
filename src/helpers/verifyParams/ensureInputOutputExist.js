/**
 * Verify that the passed in parameters for input and output files exists, are the
 * correct types, and match their conversion method (encode/decode/transcode).
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function ensureInputOutputExist (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

    if (
        !params.input ||
        !params.output ||
        typeof(params.input) !== 'string' ||
        typeof(params.output) !== 'string'
    ) {
        warnUser('You must pass in a path to your input and output files as a string.', skipWarnings);
        return false;
    }

    var input = params.input.toLowerCase();
    var output = params.output.toLowerCase();

    if (
        src === 'encode' &&
        !input.endsWith('.png') &&
        !input.endsWith('.pnm') &&
        !input.endsWith('.ppm') &&
        !input.endsWith('.pgm') &&
        !input.endsWith('.pbm') &&
        !input.endsWith('.pam')
    ) {
        warnUser('Encode input only accepts .png, .pnm, .ppm, .pgm, .pbm, and .pam files.', skipWarnings);
        return false;
    }
    if (src === 'encode' && !output.endsWith('.flif')) {
        warnUser('Encode output must be a .flif file.', skipWarnings);
        return false;
    }

    if (src === 'decode' && !input.endsWith('.flif')) {
        warnUser('Decode input must be a .flif file.', skipWarnings);
        return false;
    }
    if (
        src === 'decode' &&
        !output.endsWith('.png') &&
        !output.endsWith('.pnm') &&
        !output.endsWith('.ppm') &&
        !output.endsWith('.pgm') &&
        !output.endsWith('.pbm') &&
        !output.endsWith('.pam')
    ) {
        warnUser('Decode output only accepts .png, .pnm, .ppm, .pgm, .pbm, and .pam file.', skipWarnings);
        return false;
    }

    if (src === 'transcode' && (!input.endsWith('.flif') || !output.endsWith('.flif'))) {
        warnUser('Transcode input and output must be .flif files.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = ensureInputOutputExist;
