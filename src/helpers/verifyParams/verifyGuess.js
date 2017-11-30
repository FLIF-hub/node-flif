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

    // Throw error if params.guess is used but isn't an object
    if (
        params.guess === false ||
        params.guess === true ||
        params.guess === null ||
        params.guess && Array.isArray(params.guess) ||
        params.guess && typeof(params.guess) !== 'object' ||
        params.guess && src === 'decode'
    ) {
        warnUser('The guess parameter must be an object.', skipWarnings);
        return false;
    }

    if (params.guess && typeof(params.guess) === 'object') {
        // Describe all planes
        var y = params.guess.y;
        var co = params.guess.co;
        var cg = params.guess.cg;
        var alpha = params.guess.alpha;
        var lookback = params.guess.lookback;

        var planes = [y, co, cg, alpha, lookback];

        for (var i = 0; i < planes.length; i++) {
            var plane = planes[i];

            if (
                plane === false ||
                plane && typeof(plane) !== 'string' ||
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

        var expectedKeys = ['y', 'co', 'cg', 'alpha', 'lookback'];
        for (var key in params.guess) {
            var keyMatched = false;
            for (var j = 0; j < expectedKeys.length; j++) {
                var expectedKey = expectedKeys[j];
                if (key === expectedKey) {
                    keyMatched = true;
                }
            }
            if (!keyMatched) {
                warnUser('Unexpected parameter: guess.' + key + '. Use one or more of the following instead: y, co, cg, alpha, lookback.', skipWarnings);
                return false;
            }
        }
    }

    return true;
}

module.exports = verifyGuess;
