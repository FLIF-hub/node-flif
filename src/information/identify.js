/**
 * Do not decode, just identify the input flif file.
 *
 * @param  {string} file The path to the flif file to inspect
 * @return {object}      Data about the provided flif, including:
 *                       name, dimensions, color, interlace, size
 */
function identify (file) {
    var fs = require('fs');
    var endsWith = require('../helpers/endswith.js');
    var runCommandSync = require('../helpers/runcommandsync.js');

    if (!file || typeof(file) !== 'string') {
        throw 'You must pass in a string to the identify method.';
    } else if (!endsWith(file, '.flif')) {
        throw 'The identify method only works on FLIF files.';
    }

    var stats = fs.statSync(file);

    // [115, 97, 109, 112, 108, 101, 9......]
    var rawData = runCommandSync('-d -i ' + file);

    // 'sample\cat.flif: FLIF image, 80x64, 8-bit RGBA, non-interlaced'
    var processedData = rawData.toString().trim();

    // 'sample\cat.flif'
    var fileName = processedData.split(': ')[0];

    // 'FLIF image, 80x64, 8-bit RGBA, non-interlaced'
    var info = processedData.split(': ')[1];

    // ["FLIF image", "80x64", "8-bit RGBA", "non-interlaced"]
    info = info.split(', ');

    var data = {
        'file': fileName,
        'dimensions': info[1],
        'color': info[2],
        'interlace': info[3],
        'size': stats.size
    };

    return data;
}

module.exports = identify;
