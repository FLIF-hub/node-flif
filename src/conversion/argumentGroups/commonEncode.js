/* eslint-disable no-regex-spaces */
/* eslint-disable no-unused-vars */

/**
 * Commonly used arguments used for Encodes.
 * @param  {object}  params Parameters for the encoding passed in by the user.
 * @return {string}         The arguments to be passed into the CLI
 */
function commonEncode (params) {
    var arguments = [
        ''
    ].join(' ');

    arguments = arguments.replace(/  +/g, ' ');
    arguments = arguments.trim();

    return arguments;
}

module.exports = commonEncode;
