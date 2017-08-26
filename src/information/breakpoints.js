/**
 * Does not decode, just returns metadata about the breakpoints
 * in the flif. This data can be used to truncate a file at
 * different points. The breakpoints, or "truncation offsets",
 * are for truncations at scales 1:8, 1:4, 1:2.
 * This function runs synchronously.
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
function breakpoints (file) {
    var identify = require('./identify.js');
    var runCommandSync = require('../helpers/runcommandsync.js');

    if (!file || typeof(file) !== 'string') {
        throw 'You must pass in a string to the breakpoints method.';
    } else if (!file.endsWith('.flif')) {
        throw 'The breakpoints method only works on FLIF files.';
    }

    if (identify(file).interlace === 'non-interlaced') {
        return {};
    } else {
        var rawData = runCommandSync('--decode --breakpoints ' + file);
        rawData = rawData.split('\n');

        var offsetStart = parseInt(rawData[0].split('offset ')[1]);
        var eighth = parseInt(rawData[1].split(' ')[2]);
        var fourth = parseInt(rawData[2].split(' ')[2]);
        var half = parseInt(rawData[3].split(' ')[2]);

        var data = {
            'offsetStart': offsetStart,
            'eighth': eighth,
            'fourth': fourth,
            'half': half
        };

        return data;
    }
}

module.exports = breakpoints;
