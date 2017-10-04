/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyManiacThreshold (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 4;
    var upperBounds = 100000;

    if (
        params.maniacThreshold === false ||
        params.maniacThreshold === true ||
        params.maniacThreshold === null ||
        params.maniacThreshold && typeof(params.maniacThreshold) !== 'number' ||
        typeof(params.maniacThreshold) === 'number' && params.maniacThreshold < lowerBounds ||
        typeof(params.maniacThreshold) === 'number' && params.maniacThreshold > upperBounds ||
        typeof(params.maniacThreshold) === 'number' && params.maniacThreshold % 1 !== 0 ||
        typeof(params.maniacThreshold) === 'number' && src === 'decode'
    ) {
        warnUser('The maniacThreshold parameter must be a whole number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyManiacThreshold;
