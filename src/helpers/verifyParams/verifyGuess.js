/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyGuess (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

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

    return true;
}

module.exports = verifyGuess;
