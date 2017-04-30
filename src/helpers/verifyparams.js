/**
 * Verify that the passed in parameters are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params The object the user passed in.
 * @param  {string}  src    The method that called verifyParams, used in error messages.
 * @return {boolean}        True if params pass, false if there was a problem.
 */
function verifyParams (params, src) {
    // Ensure params exists and is an object and not an array
    if (!params || typeof params !== 'object' || params.length !== undefined) {
        throw 'You must pass an object into nodeFLIF.' + src;
    }
    // Supported input/output image formats: PNG, PNM (PPM,PGM,PBM), PAM
    return true;
}

module.exports = verifyParams;
