/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyFrameDelay (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 0;
    var upperBounds = 60000;

    if (
        params.frameDelay === null ||
        params.frameDelay === false ||
        params.frameDelay === true ||
        params.frameDelay && typeof(params.frameDelay) !== 'object' ||
        params.frameDelay && !Array.isArray(params.frameDelay) ||
        params.frameDelay && src === 'decode'
    ) {
        warnUser('The frameDelay parameter must be an array of numbers like [100] or [100, 250].', skipWarnings);
        return false;
    }

    if (params.frameDelay && params.frameDelay.length > 0) {
        for (var i = 0; i < params.frameDelay.length; i++) {
            var item = params.frameDelay[i];
            if (
                typeof(item) !== 'number' ||
                item === undefined
            ) {
                warnUser('The frameDelay parameter must be an array of numbers like [100] or [100, 250].', skipWarnings);
                return false;
            }
            if (
                typeof(item) === 'number' && item < lowerBounds ||
                typeof(item) === 'number' && item > upperBounds
            ) {
                warnUser('Numbers in the frameDelay parameter array must be a whole number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
                return false;
            }
        }
    }

    return true;
}

module.exports = verifyFrameDelay;
