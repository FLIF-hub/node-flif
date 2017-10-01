/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyChanceCutoff (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = 1;
    var upperBounds = 128;

    if (
        params.chanceCutoff === false ||
        params.chanceCutoff === true ||
        params.chanceCutoff === null ||
        params.chanceCutoff && typeof(params.chanceCutoff) !== 'number' ||
        typeof(params.chanceCutoff) === 'number' && params.chanceCutoff < lowerBounds ||
        typeof(params.chanceCutoff) === 'number' && params.chanceCutoff > upperBounds ||
        typeof(params.chanceCutoff) === 'number' && params.chanceCutoff % 1 !== 0 ||
        typeof(params.chanceCutoff) === 'number' && src === 'decode'
    ) {
        warnUser('The chanceCutoff parameter must be a whole number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyChanceCutoff;
