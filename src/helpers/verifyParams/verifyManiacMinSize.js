/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyManiacMinSize (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 0;
    // The upperBounds are not defined in the FLIF source code. It only checks for if (x < 0) { throw error }

    if (
        params.maniacMinSize === false ||
        params.maniacMinSize === true ||
        params.maniacMinSize === null ||
        params.maniacMinSize && typeof(params.maniacMinSize) !== 'number' ||
        typeof(params.maniacMinSize) === 'number' && params.maniacMinSize < lowerBounds ||
        typeof(params.maniacMinSize) === 'number' && params.maniacMinSize % 1 !== 0 ||
        typeof(params.maniacMinSize) === 'number' && src === 'decode'
    ) {
        warnUser('The maniacMinSize parameter must be a whole number greater than or equal to ' + lowerBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyManiacMinSize;
