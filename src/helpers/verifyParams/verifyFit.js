/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyFit (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

    if (params.fit && typeof(params.fit) !== 'object') {
        warnUser('The fit parameter must be a object.', skipWarnings);
        return false;
    }

    if (
        params.fit === null ||
        params.fit === false ||
        params.fit &&
        (
            Object.keys(params.fit).length !== 2 ||
            params.fit.width === false ||
            params.fit.height === false ||
            params.fit.width === true ||
            params.fit.height === true ||
            isNaN(parseInt(params.fit.width)) ||
            isNaN(parseInt(params.fit.height)) ||
            params.fit.width < 0 ||
            params.fit.height < 0 ||
            src === 'encode'
        )
    ) {
        warnUser('The fit parameter should be an object. Example: { width: 320, height: 240 }.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyFit;
