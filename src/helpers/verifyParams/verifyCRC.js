/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyCRC (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

    if (
        params.crc === null ||
        params.crc &&
        typeof(params.crc) !== 'boolean'
    ) {
        warnUser('The crc parameter must be a boolean value.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyCRC;
