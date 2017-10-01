/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyChanceAlpha (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 2;
    var upperBounds = 128;

    if (
        params.chanceAlpha === false ||
        params.chanceAlpha === true ||
        params.chanceAlpha === null ||
        params.chanceAlpha && typeof(params.chanceAlpha) !== 'number' ||
        typeof(params.chanceAlpha) === 'number' && params.chanceAlpha < lowerBounds ||
        typeof(params.chanceAlpha) === 'number' && params.chanceAlpha > upperBounds ||
        typeof(params.chanceAlpha) === 'number' && params.chanceAlpha % 1 !== 0 ||
        typeof(params.chanceAlpha) === 'number' && src === 'decode'
    ) {
        warnUser('The chanceAlpha parameter must be a whole number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyChanceAlpha;
