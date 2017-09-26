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
    'executablePath': require('./src/helpers/executablePath.js'),


    // //////////////////////////// //
    //        FILE CONVERSION       //
    // //////////////////////////// //

    'convert': function (params, src, callback) {
        if (!src || typeof(src) !== 'string' || (src !== 'encode' && src !== 'decode' && src !== 'transcode')) {
            throw 'The src argument must be encode, decode, or transcode.';
        }
        if (callback && typeof(callback) !== 'function') {
            throw 'The second argument in node-flif.' + src + ' is optional. However if used, it must be a function.';
        }

        var buildArgs = require('./src/conversion/' + src + '.js');
        var args = buildArgs(params);

        if (args === false) {
            throw 'ERROR: node-flif was unable to complete.';
        }

        if (params.async === false) {
            var runCommandSync = require('./src/helpers/runCommandSync.js');
            return runCommandSync(args);
        } else {
            var runCommand = require('./src/helpers/runCommand.js');
            if (callback && typeof(callback) === 'function') {
                runCommand(args, callback);
            } else {
                runCommand(args);
            }
        }
    },

    /**
     * Encodes a PNG, PNM, PPM, PGM, PBM, or PAM to a FLIF.
     * @param  {object}   params   Parameters for the encoding passed in by the user.
     * @param  {function} callback Optional callback function, ignored if async param is false
     */
    'encode': function (params, callback) {
        this.convert(params, 'encode', callback);
    },
    /**
     * Decodes a FLIF to a PNG, PNM, PPM, PGM, PBM, or PAM.
     * @param  {object}   params   Parameters for the decoding passed in by the user.
     * @param  {function} callback Optional callback function, ignored if async param is false
     */
    'decode': function (params, callback) {
        this.convert(params, 'decode', callback);
    },
    /**
     * Transcodes a FLIF to a new FLIF.
     * @param  {object}   params   Parameters for the transcoding passed in by the user.
     * @param  {function} callback Optional callback function, ignored if async param is false
     */
    'transcode': function (params, callback) {
        this.convert(params, 'transcode', callback);
    },


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
