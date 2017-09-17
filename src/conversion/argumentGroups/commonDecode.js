/* eslint-disable no-regex-spaces */
/* eslint-disable no-unused-vars */

/**
 * Commonly used arguments used during Decodes.
 * @param  {object}  params Parameters for the decoding passed in by the user.
 * @return {string}         The arguments to be passed into the CLI
 */
function commonDecode (params) {
    var arguments = [
        ''
    ].join(' ');

    arguments = arguments.replace(/  +/g, ' ');
    arguments = arguments.trim();

    return arguments;
}

module.exports = commonDecode;
