/* eslint-disable no-console */

/*
 flif -e [encode options] <input image(s)> <output.flif>
 flif -d [decode options] <input.flif> <output.pnm | output.pam | output.png>
 flif -t [decode options] [encode options] <input.flif> <output.flif>

 General Options:
   -h, --help                  show help (use -hvv for advanced options)
   -v, --verbose               increase verbosity (multiple -v for more output)
   -c, --no-crc                don't verify the CRC (or don't add a CRC)
   -m, --no-metadata           strip Exif/XMP metadata (default is to keep it)
   -p, --no-color-profile      strip ICC color profile (default is to keep it)
   -o, --overwrite             overwrite existing files
   -k, --keep-palette          use input PNG palette / write palette PNG if possible

 Encode options: (-e, --encode)
   -E, --effort=N              0=fast/poor compression, 100=slowest/best? (default: -E60)
   -I, --interlace             interlacing (default, except for tiny images)
   -N, --no-interlace          force no interlacing
   -Q, --lossy=N               lossy compression; default: -Q100 (lossless)
   -K, --keep-invisible-rgb    store original RGB values behind A=0
   -F, --frame-delay=N[,N,..]  delay between animation frames in ms; default: -F100

 Advanced encode options: (mostly useful for flifcrushing)
   -P, --max-palette-size=N    max size for Palette(_Alpha); default: -P512
   -A, --force-color-buckets   force Color_Buckets transform
   -B, --no-color-buckets      disable Color_Buckets transform
   -C, --no-channel-compact    disable Channel_Compact transform
   -Y, --no-ycocg              disable YCoCg transform; use G(R-G)(B-G)
   -W, --no-subtract-green     disable YCoCg and SubtractGreen transform; use GRB
   -S, --no-frame-shape        disable Frame_Shape transform
   -L, --max-frame-lookback=N  max nb of frames for Frame_Lookback; default: -L1
   -R, --maniac-repeats=N      MANIAC learning iterations; default: -R2
   -T, --maniac-threshold=N    MANIAC tree growth split threshold, in bits saved; default: -T64
   -D, --maniac-divisor=N      MANIAC inner node count divisor; default: -D30
   -M, --maniac-min-size=N     MANIAC post-pruning threshold; default: -M50
   -X, --chance-cutoff=N       minimum chance (N/4096); default: -X2
   -Z, --chance-alpha=N        chance decay factor; default: -Z19
   -U, --adaptive              adaptive lossy, second input image is saliency map
   -G, --guess=N[N..]          pixel predictor for each plane (Y,Co,Cg,Alpha,Lookback)
                               ?=pick heuristically, 0=avg, 1=median_grad, 2=median_nb, X=mixed
   -H, --invisible-guess=N     predictor for invisible pixels (only if -K is not used)
   -J, --chroma-subsample      write an incomplete 4:2:0 chroma subsampled FLIF file (lossy!)

 Decode options: (-d, --decode)
   -i, --identify             do not decode, just identify the input FLIF file
   -q, --quality=N            lossy decode quality percentage; default -q100
   -s, --scale=N              lossy downscaled image at scale 1:N (2,4,8,16,32); default -s1
   -r, --resize=WxH           lossy downscaled image to fit inside WxH (but typically smaller)
   -f, --fit=WxH              lossy downscaled image to exactly WxH
   -b, --breakpoints          report breakpoints (truncation offsets) for truncations at scales 1:8, 1:4, 1:2
*/

var nodeFLIF = {


    // //////////////////////////// //
    //        HELPER METHODS        //
    // //////////////////////////// //

    /**
     * Check if a phrase ends in a specific word
     * @param  {string}  phrase The string you are checking.
     * @param  {string}  word   The string you are matching against
     * @return {boolean}        True if phrase ends in word
     */
    endsWith: function (phrase, word) {
        if (!phrase || !word || typeof(phrase) !== 'string' || typeof(word) !== 'string') {
            throw 'The endsWith method requires two strings.';
        }
        return phrase.slice(-word.length) == word;
    },

    /**
     * Detect the user's OS and architecture to
     * generate the correct path to the flif
     * executable that will work for them.
     *
     * @return {string} Path to the correct flif.exe
     */
    executablePath: function () {
        var path = require('path');
        var os = process.platform;
        var reportedArch = process.arch;
        var executablePath = '';

        var arch = '64';
        if (reportedArch === 'x86') {
            arch = '32';
        }

        if (os === 'win32') {
            executablePath = path.join('.', 'executables', 'win' + arch, 'flif.exe');
        } else if (os === 'darwin') {
            executablePath = path.join('.', 'executables', 'osx' + arch, 'flif');
        } else if (os === 'linux') {
            executablePath = path.join('.', 'executables', 'ubuntu' + arch, 'flif');
        }

        if (executablePath.length < 2 || os === 'darwin' && arch === '32') {
            throw 'Your operating system or architecture is not supported by node-flif';
        }

        return executablePath;
    },

    /**
     * Spawns a child process using the arguments that were passed in.
     * This is done asynchronously. It will run the callback function
     * upon completion.
     * @param  {string}   args     List of arguments to pass in
     * @param  {function} callback Optional callback function
     */
    runCommand: function (args, callback) {
        if (!args || typeof(args) !== 'string') {
            throw 'You must pass in a string containing the arguments to be sent to the command line.';
        } else if (callback && typeof(callback) !== 'function') {
            throw 'The second argument to the runCommand method is meant to be a callback function.';
        }

        var exec = require('child_process').exec;
        var flif = this.executablePath();
        var executableAndArgs = flif + ' ' + args;

        var child = exec(executableAndArgs,
            // Throw errors and information into console
            function (error, stdout, stderr) {
                console.log(executableAndArgs);
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('Executable Error: ' + error);
                }
            }
        );
        // Return data from command line
        child.stdout.on('data', function (chunk) {
            if (callback) {
                callback(chunk);
            }
        });
    },

    /**
     * Spawns a child process using the arguments that were passed in.
     * This is done synchronously.
     *
     * @param  {string} args List of arguments to pass in.
     * @return {string}      The data that is returned from the finished executable.
     */
    runCommandSync: function (args) {
        if (!args || typeof(args) !== 'string') {
            throw 'You must pass in a string containing the arguments to be sent to the command line.';
        }

        var exec = require('child_process').execSync;
        var flif = this.executablePath();
        var executableAndArgs = flif + ' ' + args;

        var child = exec(executableAndArgs);

        return child;
    },

    /**
     * Verify that the passed in parameters are the correct types.
     * Return helpful error messages to users.
     *
     * @param  {object}  params The object the user passed in.
     * @param  {string}  src    The method that called verifyParams, used in error messages.
     * @return {boolean}        True if params pass, false if there was a problem.
     */
    'verifyParams': function (params, src) {
        // Ensure params exists and is an object and not an array
        if (!params || typeof params !== 'object' || params.length !== undefined) {
            throw 'You must pass an object into nodeFLIF.' + src;
        }
        // Supported input/output image formats: PNG, PNM (PPM,PGM,PBM), PAM
        return true;
    },


    // //////////////////////////// //
    //        FILE CONVERSION       //
    // //////////////////////////// //

    /**
     * codes your input
     * @param  {object}  params Parameters for the encoding passed in by the user.
     * @return {boolean}        True if successful, false if there was a problem.
     */
    'encode': function (params) {
        this.verifyParams(params, 'encode');
        console.log(params);
    },

    /**
     * codes your input
     * @param  {object}  params Parameters for the decoding passed in by the user.
     * @return {boolean}        True if successful, false if there was a problem.
     */
    'decode': function (params) {
        this.verifyParams(params, 'decode');
        console.log(params);
    },

    /**
     * codes your input
     * @param  {object}  params Parameters for the transcoding passed in by the user.
     * @return {boolean}        True if successful, false if there was a problem.
     */
    'transcode': function (params) {
        this.verifyParams(params, 'transcode');
        console.log(params);
    },


    // //////////////////////////// //
    //         INFORMATION          //
    // //////////////////////////// //

    /**
     * Do not decode, just identify the input FLIF file
     * @param  {[type]} params [description]
     * @return {[type]}        [description]
     */
    'identify': function (file) {
        if (!file || typeof(file) !== 'string') {
            throw 'You must pass in a string to the identify method.';
        } else if (!this.endsWith(file, '.flif')) {
            throw 'The identify method only works on FLIF files.';
        }

        var fs = require('fs');
        var stats = fs.statSync(file);

        // [115, 97, 109, 112, 108, 101, 9......]
        var rawData = this.runCommandSync('-d -i ' + file);

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
    },

    /**
     * Returns the versions of node-flif and the flif executable.
     * @return {object} Contains keys for nodeFLIF and flif that contain a string of the versions.
     */
    'version': function () {
        var fs = require('fs');
        var path = require('path');
        var manifest = fs.readFileSync(path.join('package.json'));
        var versionInfo = {
            'nodeFLIF': manifest.version,
            'flif': manifest.flifVersion
        };
        return versionInfo;
    }
};

module.exports = nodeFLIF;
