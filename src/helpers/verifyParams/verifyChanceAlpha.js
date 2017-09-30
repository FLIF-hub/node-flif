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

    if (
        params.chanceAlpha === false ||
        params.chanceAlpha === true ||
        params.chanceAlpha === null ||
        params.chanceAlpha && typeof(params.chanceAlpha) !== 'number' ||
        typeof(params.chanceAlpha) === 'number' && params.chanceAlpha < 2 ||
        typeof(params.chanceAlpha) === 'number' && params.chanceAlpha > 128 ||
        typeof(params.chanceAlpha) === 'number' && params.chanceAlpha % 1 !== 0 ||
        typeof(params.chanceAlpha) === 'number' && src === 'decode'
    ) {
        warnUser('The chanceAlpha parameter must be a number between 2 and 128.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyChanceAlpha;
