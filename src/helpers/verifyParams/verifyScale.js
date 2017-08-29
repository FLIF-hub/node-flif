/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyScale (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

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

    return true;
}

module.exports = verifyScale;
