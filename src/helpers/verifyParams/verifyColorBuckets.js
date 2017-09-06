/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyColorBuckets (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

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

    return true;
}

module.exports = verifyColorBuckets;
