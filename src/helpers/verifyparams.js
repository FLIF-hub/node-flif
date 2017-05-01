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

    // Ensure params exists and is an object and not an array
    if (!params || typeof(params) !== 'object' || params.length !== undefined) {
        warnUser('You must pass an object into nodeFLIF.' + src);
        return false;
    }

    if (!src || typeof(src) !== 'string' || src.length < 2) {
        warnUser('The type of paramater (encode, decode, transcode) is unknown.');
        return false;
    }

    if (!params.input || !params.output) {
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

    /********************************

    No test coverage after this point

    ********************************/

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

    if (src === 'transcode' && !endsWith(input, '.flif') || !endsWith(output, '.flif')) {
        warnUser('Decode input and output must be .flif files.');
        return false;
    }

    return true;
}

module.exports = verifyParams;
