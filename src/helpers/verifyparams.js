/**
 * Verify that the passed in parameters are the correct types.
 * Return helpful error messages to users.
 *
 * @param  {object}  params       The object the user passed in.
 * @param  {string}  src          The method that called verifyParams, used in error messages.
 * @param  {boolean} skipWarnings This is used in our tests to not flag false positives.
 * @return {boolean}              True if params pass, false if there was a problem.
 */

function verifyParams (params, src, skipWarnings) {
    var endsWith = require('./endsWith.js');
    skipWarnings = skipWarnings || false;
    if (typeof(skipWarnings) !== 'boolean') {
        skipWarnings = false;
    }

    /**
     * Logs out a stack trace and helpful human readable message.
     * @param  {string}  message  The helpful message to be logged out.
     */
    function warnUser (message) {
        if (!skipWarnings) {
            var stack = (new Error()).stack.trim().split('\n');
            var stackTrace = [
                stack[3].trim().replace('at ', ''),
                stack[4].trim().replace('at ', ''),
                stack[5].trim().replace('at ', ''),
                stack[6].trim().replace('at ', '')
            ].join('\n');
            console.log('\nWARNING: ' + message + '\n\n' + stackTrace + '\n'); // eslint-disable-line no-console
        }
    }


    // ////////////////////// //
    //  Ensure params exists  //
    // ////////////////////// //
    if (!params || typeof(params) !== 'object' || params.length !== undefined) {
        warnUser('You must pass an object into nodeFLIF.' + src);
        return false;
    }

    if (!src || typeof(src) !== 'string' || src.length < 2) {
        warnUser('The type of parameter (encode, decode, transcode) is unknown.');
        return false;
    }


    // /////////////////////// //
    //  Validate input/output  //
    // /////////////////////// //

    if (
        !params.input ||
        !params.output ||
        typeof(params.input) !== 'string' ||
        typeof(params.output) !== 'string'
    ) {
        warnUser('You must pass in a path to your input and output files as a string.');
        return false;
    }

    var input = params.input.toLowerCase();
    var output = params.output.toLowerCase();

    if (
        src === 'encode' &&
        !endsWith(input, '.png') &&
        !endsWith(input, '.pnm') &&
        !endsWith(input, '.ppm') &&
        !endsWith(input, '.pgm') &&
        !endsWith(input, '.pbm') &&
        !endsWith(input, '.pam')
    ) {
        warnUser('Encode input only accepts .png, .pnm, .ppm, .pgm, .pbm, and .pam.');
        return false;
    }
    if (src === 'encode' && !endsWith(output, '.flif')) {
        warnUser('Encode output must be a .flif.');
        return false;
    }

    if (src === 'decode' && !endsWith(input, '.flif')) {
        warnUser('Decode input must be a .flif.');
        return false;
    }
    if (
        src === 'decode' &&
        !endsWith(output, '.png') &&
        !endsWith(output, '.pnm') &&
        !endsWith(output, '.ppm') &&
        !endsWith(output, '.pgm') &&
        !endsWith(output, '.pbm') &&
        !endsWith(output, '.pam')
    ) {
        warnUser('Decode output only accepts .png, .pnm, .ppm, .pgm, .pbm, and .pam.');
        return false;
    }

    if (src === 'transcode' && (!endsWith(input, '.flif') || !endsWith(output, '.flif'))) {
        warnUser('Transcode input and output must be .flif files.');
        return false;
    }


    // /////////////////////////// //
    //  Validating Common Options  //
    // /////////////////////////// //

    if (
        params.async === null ||
        params.async &&
        typeof(params.async) !== 'boolean'
    ) {
        warnUser('The async parameter must be a boolean value.');
        return false;
    }

    if (
        params.overwrite === null ||
        params.overwrite &&
        typeof(params.overwrite) !== 'boolean'
    ) {
        warnUser('The overwrite parameter must be a boolean value.');
        return false;
    }

    if (
        params.quality === null ||
        params.quality === false ||
        params.quality &&
        typeof(params.quality) !== 'number' ||
        params.quality &&
        (
            params.quality > 100 ||
            params.quality < 0 ||
            // check if whole number
            params.quality % 1 !== 0
        )
    ) {
        warnUser('The quality parameter must be a whole number between 0 and 100.');
        return false;
    }

    if (
        params.keepMetaData === null ||
        params.keepMetaData &&
        typeof(params.keepMetaData) !== 'boolean'
    ) {
        warnUser('The keepMetaData parameter must be a boolean value.');
        return false;
    }

    if (
        params.keepColorProfile === null ||
        params.keepColorProfile &&
        typeof(params.keepColorProfile) !== 'boolean'
    ) {
        warnUser('The keepColorProfile parameter must be a boolean value.');
        return false;
    }

    // ///////////////////////////// //
    //  Validating Advanced Options  //
    // ///////////////////////////// //

    if (
        params.crc === null ||
        params.crc &&
        typeof(params.crc) !== 'boolean'
    ) {
        warnUser('The crc parameter must be a boolean value.');
        return false;
    }

    if (
        params.keepPalette === null ||
        params.keepPalette &&
        typeof(params.keepPalette) !== 'boolean'
    ) {
        warnUser('The keepPalette parameter must be a boolean value.');
        return false;
    }

    if (
        params.scale === null ||
        params.scale === false ||
        params.scale &&
        typeof(params.scale) !== 'number' ||
        params.scale &&
        (
            params.scale !== 1 &&
            params.scale !== 2 &&
            params.scale !== 4 &&
            params.scale !== 8 &&
            params.scale !== 16 &&
            params.scale !== 32
        )
    ) {
        warnUser('The scale parameter must be one of the following numbers: 1, 2, 4, 8, 16, 32.');
        return false;
    }

    if (params.resize && typeof(params.resize) !== 'object') {
        warnUser('The resize parameter must be a object.');
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
            params.resize.width < 0 ||
            params.resize.height < 0
        )
    ) {
        warnUser('The resize parameter should be an object. Example: { width: 320, height: 240 }.');
        return false;
    }

    if (params.fit && typeof(params.fit) !== 'object') {
        warnUser('The fit parameter must be a object.');
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
            params.fit.height < 0
        )
    ) {
        warnUser('The fit parameter should be an object. Example: { width: 320, height: 240 }.');
        return false;
    }

    // TODO:
    // 1. Add in the rest of the parameters from encode/transcode for validation
    // 2. Break this file up into a bunch of smaller files for each param with their own tests
    // 3. Ensure that encode-only params fail when passed in to transcode/decode and vice versa

    return true;
}

module.exports = verifyParams;
