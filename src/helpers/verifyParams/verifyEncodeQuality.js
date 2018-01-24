/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyEncodeQuality (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 0;
    var upperBounds = 100;

    if (
        params.encodeQuality === false ||
        params.encodeQuality === true ||
        params.encodeQuality === null ||
        params.encodeQuality && typeof(params.encodeQuality) !== 'number' ||
        typeof(params.encodeQuality) === 'number' && params.encodeQuality < lowerBounds ||
        typeof(params.encodeQuality) === 'number' && params.encodeQuality > upperBounds ||
        typeof(params.encodeQuality) === 'number' && params.encodeQuality % 1 !== 0 ||
        typeof(params.encodeQuality) === 'number' && src === 'decode'
    ) {
        warnUser('The encodeQuality parameter must be a whole number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyEncodeQuality;
