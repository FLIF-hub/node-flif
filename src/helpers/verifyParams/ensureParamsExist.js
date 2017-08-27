/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function ensureParamsExist (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

    if (!params || typeof(params) !== 'object' || Object.keys(params).length < 2) {
        warnUser('You must pass an object into nodeFLIF.' + src, skipWarnings);
        return false;
    }

    if (!src || typeof(src) !== 'string' || src.length < 2) {
        warnUser('The conversion method (encode, decode, transcode) is unknown.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = ensureParamsExist;
