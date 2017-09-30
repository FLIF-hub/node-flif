/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyManiacRepeats (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 0;
    var upperBounds = 20;

    if (
        params.maniacRepeats === false ||
        params.maniacRepeats === true ||
        params.maniacRepeats === null ||
        params.maniacRepeats && typeof(params.maniacRepeats) !== 'number' ||
        typeof(params.maniacRepeats) === 'number' && params.maniacRepeats < lowerBounds ||
        typeof(params.maniacRepeats) === 'number' && params.maniacRepeats > upperBounds ||
        typeof(params.maniacRepeats) === 'number' && params.maniacRepeats % 1 !== 0 ||
        typeof(params.maniacRepeats) === 'number' && src === 'decode'
    ) {
        warnUser('The maniacRepeats parameter must be a whole number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyManiacRepeats;
