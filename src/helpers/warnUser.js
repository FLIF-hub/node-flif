/**
 * Logs out a stack trace and helpful human readable message.
 * @param  {string}  message      The helpful message to be logged out.
 * @param  {boolean} skipWarnings If true, skip logging console errors.
 */
function warnUser (message, skipWarnings) {
    skipWarnings = skipWarnings || false;

    if (typeof(skipWarnings) !== 'boolean') {
        skipWarnings = false;
    }

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

module.exports = warnUser;
