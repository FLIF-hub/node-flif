/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
// eslint-disable-next-line no-unused-vars
function verifyMaxPaletteSize (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');
    var lowerBounds = -32000;
    var upperBounds = 32000;

    if (
        params.maxPaletteSize === false ||
        params.maxPaletteSize === true ||
        params.maxPaletteSize === null ||
        params.maxPaletteSize && typeof(params.maxPaletteSize) !== 'number' ||
        typeof(params.maxPaletteSize) === 'number' && params.maxPaletteSize < lowerBounds ||
        typeof(params.maxPaletteSize) === 'number' && params.maxPaletteSize > upperBounds ||
        typeof(params.maxPaletteSize) === 'number' && params.maxPaletteSize % 1 !== 0
    ) {
        warnUser('The maxPaletteSize parameter must be a whole number between ' + lowerBounds + ' and ' + upperBounds + '.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyMaxPaletteSize;
