/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyAlphaGuess (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

    if (
        params.alphaGuess === false ||
        params.alphaGuess === true ||
        params.alphaGuess === null ||
        params.alphaGuess && typeof(params.alphaGuess) !== 'string' ||
        params.alphaGuess && src === 'decode' ||
        params.alphaGuess && (
            params.alphaGuess !== 'average' &&
            params.alphaGuess !== 'median gradient' &&
            params.alphaGuess !== 'median neighbors'
        )
    ) {
        warnUser('The alphaGuess parameter must be one of the following: "average", "median gradient", "median neighbors".', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyAlphaGuess;
