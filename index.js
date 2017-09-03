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

    /**
     * Encodes a PNG, PNM, PPM, PGM, PBM, or PAM to a FLIF.
     * @param  {object}   params   Parameters for the encoding passed in by the user.
     * @param  {function} callback Optional callback function, ignored if async param is false
     */
    'encode': function (params, callback) {
        if (!params) {
            throw 'You must pass parameters into node-flif encode.';
        } else if (callback && typeof(callback) !== 'function') {
            throw 'The second argument in node-flif encode is optional. However if used, it must be a function.';
        }

        var buildEncodeArgs = require('./src/conversion/encode.js');
        var arguments = buildEncodeArgs(params);

        if (params.async === false) {
            var runCommandSync = require('./src/helpers/runCommandSync.js');
            return runCommandSync(arguments);
        } else {
            var runCommand = require('./src/helpers/runCommand.js');
            if (callback && typeof(callback) === 'function') {
                runCommand(arguments, callback);
            } else {
                runCommand(arguments);
            }
        }
    },
    /**
     * Decodes a FLIF to a PNG, PNM, PPM, PGM, PBM, or PAM.
     * @param  {object}   params   Parameters for the decoding passed in by the user.
     * @param  {function} callback Optional callback function, ignored if async param is false
     */
    'decode': function (params, callback) {
        if (!params) {
            throw 'You must pass parameters into node-flif decode.';
        } else if (callback && typeof(callback) !== 'function') {
            throw 'The second argument in node-flif decode is optional. However if used, it must be a function.';
        }

        var buildDecodeArgs = require('./src/conversion/decode.js');
        var arguments = buildDecodeArgs(params);

        if (params.async === false) {
            var runCommandSync = require('./src/helpers/runCommandSync.js');
            return runCommandSync(arguments);
        } else {
            var runCommand = require('./src/helpers/runCommand.js');
            if (callback && typeof(callback) === 'function') {
                runCommand(arguments, callback);
            } else {
                runCommand(arguments);
            }
        }
    },
    /**
     * Transcodes a FLIF to a new FLIF.
     * @param  {object}   params   Parameters for the transcoding passed in by the user.
     * @param  {function} callback Optional callback function, ignored if async param is false
     */
    'transcode': function (params, callback) {
        if (!params) {
            throw 'You must pass parameters into node-flif transcode.';
        } else if (callback && typeof(callback) !== 'function') {
            throw 'The second argument in node-flif transcode is optional. However if used, it must be a function.';
        }

        var buildTranscodeArgs = require('./src/conversion/transcode.js');
        var arguments = buildTranscodeArgs(params);

        if (params.async === false) {
            var runCommandSync = require('./src/helpers/runCommandSync.js');
            return runCommandSync(arguments);
        } else {
            var runCommand = require('./src/helpers/runCommand.js');
            if (callback && typeof(callback) === 'function') {
                runCommand(arguments, callback);
            } else {
                runCommand(arguments);
            }
        }
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
