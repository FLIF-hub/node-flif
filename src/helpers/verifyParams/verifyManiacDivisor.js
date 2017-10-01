/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyManiacDivisor (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 1;
    var upperBounds = 268435455;

    if (
        params.maniacDivisor === false ||
        params.maniacDivisor === true ||
        params.maniacDivisor === null ||
        params.maniacDivisor && typeof(params.maniacDivisor) !== 'number' ||
        typeof(params.maniacDivisor) === 'number' && params.maniacDivisor < lowerBounds ||
        typeof(params.maniacDivisor) === 'number' && params.maniacDivisor > upperBounds ||
        typeof(params.maniacDivisor) === 'number' && params.maniacDivisor % 1 !== 0 ||
        typeof(params.maniacDivisor) === 'number' && src === 'decode'
    ) {
        warnUser('The maniacDivisor parameter must be a number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyManiacDivisor;
