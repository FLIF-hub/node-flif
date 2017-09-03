/**
 * Does not decode, just identifies the input flif file.
 *
 * @param  {string} file The path to the flif file to inspect
 * @return {object}      Data about the provided flif, including:
 *                       name, dimensions, color, interlace, size
 */
function identify (file) {
    var fs = require('fs');
    var runCommandSync = require('../helpers/runCommandSync.js');

    if (!file || typeof(file) !== 'string') {
        throw 'You must pass in a string to the identify method.';
    } else if (!(file.endsWith('.flif') || file.endsWith('.flif"') || file.endsWith('.flif\''))) {
        throw 'The identify method only works on FLIF files.';
    }

    // Remove first char if it is a quote
    if (file.substring(0, 1) === '"' || file.substring(0, 1) === '\'') {
        file = file.substring(1);
    }
    // Remove last char if it is a quote
    if (file.split('').pop() === '"' || file.split('').pop() === '\'') {
        file = file.slice(0, -1);
    }

    var stats = fs.statSync(file);

    // 'sample\cat.flif: FLIF image, 80x64, 8-bit RGBA, non-interlaced'
    var rawData = runCommandSync('-d -i "' + file + '"').trim();

    // 'sample\cat.flif'
    var fileName = rawData.split(': ')[0];

    // 'FLIF image, 80x64, 8-bit RGBA, non-interlaced'
    var info = rawData.split(': ')[1];

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
