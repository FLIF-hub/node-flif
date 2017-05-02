/**
 * This file acts as the API for node-flif. It decides what
 * is publically accessible to users.
 */
var nodeFLIF = {

    // //////////////////////////// //
    //        HELPER METHODS        //
    // //////////////////////////// //

    /**
     * Detect the user's OS and architecture to
     * generate the correct path to the flif
     * executable that will work for them.
     *
     * @return {string} Path to the correct flif.exe
     */
    'executablePath': require('./src/helpers/executablepath.js'),


    // //////////////////////////// //
    //        FILE CONVERSION       //
    // //////////////////////////// //

    /**
     * Encodes your PNG/PNM/PPM/PGM/PBM/PAM to a flif.
     * @param  {object}  params Parameters for the encoding passed in by the user.
     * @return {boolean}        True if successful, false if there was a problem.
     */
    'encode': require('./src/conversion/encode.js'),

    /**
     * Decodes your FLIF to a PNG, PNM, PPM, PGM, PBM, or PAM.
     * @param  {object}  params Parameters for the decoding passed in by the user.
     * @return {boolean}        True if successful, false if there was a problem.
     */
    'decode': require('./src/conversion/decode.js'),

    /**
     * Transcodes your FLIF to a new FLIF.
     * @param  {object}  params Parameters for the transcoding passed in by the user.
     * @return {boolean}        True if successful, false if there was a problem.
     */
    'transcode': require('./src/conversion/transcode.js'),


    // //////////////////////////// //
    //         INFORMATION          //
    // //////////////////////////// //

    /**
     * Does not decode, just returns metadata about the breakpoints
     * of interlaced flifs. This data can be used to truncate a file
     * at different points. The breakpoints, or "truncation offsets",
     * are for truncations at scales 1:8, 1:4, 1:2.
     * This function runs synchronously.
     * Non-interlaced flifs will return an empty object.
     *
     * @param  {string} file Filepath to the flif image.
     * @return {object}      An object like the example below:
     *  {
            offsetStart: 11,
            eighth: 8080,
            fourth: 24900,
            half: 90422
        }
     */
    'breakpoints': require('./src/information/breakpoints.js'),

    /**
     * Does not decode, just identifies the input flif file.
     *
     * @param  {string} file The path to the flif file to inspect
     * @return {object}      Data about the provided flif, including:
     *                       name, dimensions, color, interlace, size
     */
    'identify': require('./src/information/identify.js'),

    /**
     * Returns the versions of node-flif and the flif executable.
     * @return {object} Contains keys for nodeFLIF and flif that contain a string of the versions.
     */
    'version': require('./src/information/version.js')
};

module.exports = nodeFLIF;
