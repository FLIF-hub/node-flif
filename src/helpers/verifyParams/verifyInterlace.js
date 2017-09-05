/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyInterlace (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

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

    return true;
}

module.exports = verifyInterlace;
