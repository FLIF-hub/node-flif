/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyQuality (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

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

    return true;
}

module.exports = verifyQuality;
