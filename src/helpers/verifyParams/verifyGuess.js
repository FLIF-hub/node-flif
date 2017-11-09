/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyGuess (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

    if (
        params.guess === false ||
        params.guess === true ||
        params.guess === null ||
        params.guess && typeof(params.guess) !== 'object' ||
        params.guess && src === 'decode'
    ) {
        warnUser('The guess parameter must be an object.', skipWarnings);
        return false;
    }

    if (params.guess && typeof(params.guess) === 'object') {
        var y = params.guess.y;
        var co = params.guess.co;
        var cg = params.guess.cg;
        var alpha = params.guess.alpha;
        var lookback = params.guess.lookback;

        var planes = [y, co, cg, alpha, lookback];

        for (var i = 0; i < planes.length; i++) {
            var plane = planes[i];
            if (
                plane && typeof(plane) === 'string' &&
                (
                    plane !== 'heuristically' &&
                    plane !== 'average' &&
                    plane !== 'median gradient' &&
                    plane !== 'median number' &&
                    plane !== 'mixed'
                )
            ) {
                warnUser('The guess.' + plane + ' parameter must be one of the following: "heuristically", "average", "median gradient", "median number", "mixed".', skipWarnings);
                return false;
            }
        }
    }

    return true;
}

module.exports = verifyGuess;
