/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyDecodeQuality (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 0;
    var upperBounds = 100;

    if (
        params.decodeQuality === false ||
        params.decodeQuality === true ||
        params.decodeQuality === null ||
        params.decodeQuality && typeof(params.decodeQuality) !== 'number' ||
        typeof(params.decodeQuality) === 'number' && params.decodeQuality < lowerBounds ||
        typeof(params.decodeQuality) === 'number' && params.decodeQuality > upperBounds ||
        typeof(params.decodeQuality) === 'number' && params.decodeQuality % 1 !== 0 ||
        typeof(params.decodeQuality) === 'number' && src === 'encode'
    ) {
        warnUser('The decodeQuality parameter must be a whole number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyDecodeQuality;
