/**
 * Verify that the passed in parameters exists are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */
function verifyResize (params, src, skipWarnings) {
    var warnUser = require('../warnUser.js');

    if (params.resize && typeof(params.resize) !== 'object') {
        warnUser('The resize parameter must be a object.', skipWarnings);
        return false;
    }

    if (
        params.resize === null ||
        params.resize === false ||
        params.resize &&
        (
            Object.keys(params.resize).length !== 2 ||
            params.resize.width === false ||
            params.resize.height === false ||
            params.resize.width === true ||
            params.resize.height === true ||
            isNaN(parseInt(params.resize.width)) ||
            isNaN(parseInt(params.resize.height)) ||
            // TODO: Can you resize something less than 1px?
            params.resize.width < 0 ||
            params.resize.height < 0
        )
    ) {
        warnUser('The resize parameter should be an object. Example: { width: 320, height: 240 }.', skipWarnings);
        return false;
    }

    return true;
}

module.exports = verifyResize;
