# node-flif [![Build Status](https://travis-ci.org/FLIF-hub/node-flif.svg?branch=master)](https://travis-ci.org/FLIF-hub/node-flif)

* * *

# NOT READY FOR USE YET
### Star & Watch for updates

* * *

A Node wrapper for the FLIF CLI executable.

FLIF is a lossless image format designed with the web in mind. It has lots of great features. To learn more about the format go to [FLIF.info](http://flif.info).

This repository is for a Node.js module that wraps around a native executable for your platform. That executable performs the actions of encoding or decoding FLIF files. This wrapper allows you to pass in a javascript object containing your settings into a function that will create the commandline arguments for you and then run them against the executable CLI. It will also warn you if you pass in the wrong parameters or types of data.

Eventually you will be able to `npm install` this module.

### node-flif is **NOT** meant for browsers

Since node-flif wraps around a native executable and references the file system, it cannot be ran in a browser.

If you would like to encode/decode flif files in a browser look into other projects like:

* [Poly FLIF](https://github.com/UprootLabs/poly-flif/)
* [libflif.js](https://github.com/saschanaz/libflif.js/)

* * *

## Supported Environments

* **Windows** - Node v1.0.0+ (Tested in v0.12.18 and it wouldn't work, works on 1.0.0-8.4.0)
* **Linux/OSX** - Node v8.0.0+ (Tested in 2.5.0, 3.3.1, 4.0.0, 4.8.4, 5.0.0, 6.0.0, 7.0.0, 7.10.1, none worked. Tested in Ubuntu 16 and OSX 10.11 on Node 8.0.0 and 8.4.0 and it worked.)

**Why the difference between Node version on Win/\*Nix:**

Linux/OSX is using [flif-wasm](https://github.com/SaschaNaz/flif-wasm), it has a few known Windows-specific bugs however. So on Windows we are using a pre-built 32-Bit `flif.exe` file. Because `flif-wasm` relies on Node 8+, `node-flif` on those platforms requires that same version. Where as the Windows version does not have that requirement.

* * *

## TO-DO List

* [x] Create API documentation (Subject to change prior to v1.0.0)
* [ ] Create a simple wrapper that allows passing in a parameter object that will abstract out the native executable switches.
  * Finishing up extracting common conversion argument code
  * Finishing up transcoding
* [ ] Take care of all TODO's
  * 19 remaining
* [ ] Add it to the NPM registry when at v1.0.0.

* * *

## Planned API

This is still being fleshed out.

:star: Done, has tests  
:black_large_square: Done, no tests  
:white_square_button: Started, not done  
:white_large_square: Not Started

* * *

### Encode :star:

Convert your image **to** a FLIF.

```js
var nodeFLIF = require('node-flif');

var encodeParams = {
    // Required encoding parameters
    input: ['/path/to/input-file.png'],  // Array of input files for frames, Each must end in one of these: .png, .pnm, .ppm, .pgm, .pbm, .pam
    output: '/path/to/output-file.flif', // Must end in .flif
    // Common optional encoding parameters
    async: true,            // Set to false to run this as a synchronous encoding
    overwrite: false,       // Set to true to overwrite existing files on output (default is false)
    effort: 60,             // 0 = fast/poor compression, 100 = slowest/best? (default is 60)
    interlace: 'auto',      // true, false, or 'auto' (interlacing except on tiny images) (default is 'auto')
    encodeQuality: 100,     // 0-100, where 99 and below are lossy (default is 100)
    keepAlpha: false,       // Stores the original RGB data with 0 alpha (transparent) (default is false)
    crc: true,              // Set to false to skip verifying/adding CRC (default is true)
    keepMetaData: true,     // Set to false to strip EXIF/XMP metadata (default is true)
    keepColorProfile: true, // Set to false to strip ICC color profile (default is true)
    keepPalette: false,     // Set to true to keep the existing PNG pallete. (default is false)
    frameDelay: [100],      // Animation frame delay in ms. Array of number(s). (default is [100] which applies to all frames)
    // Advanced optional encoding parameters
    maxPaletteSize: 512,    // Max number of colors to store in a FLIF palette. PNG/GIF use 256. (FLIF default is 512)
    colorBuckets: 'auto',   // true, false, or 'auto' (default is 'auto')
    channelCompact: true,   // true or false (default is true)
    ycocg: true,            // false will disable YCoCg transform and use G(R-G)(B-G) (default is true)
    subtractGreen: true,    // false will disable YCoCg and SubtractGreen transform and use GRB (default is true)
    frameShape: true,       // false will disable Frame_Shape transform (default is true)
    maxFrameLookBack: 1,    // Max number of frames for Frame_Lookback (default is 1)
    maniacRepeats: 2,       // MANIAC learning iterations; (default is 2)
    maniacThreshold: 64,    // MANIAC tree growth split threshold, in bits saved (default is 64)
    maniacDivisor: 30,      // MANIAC inner node count divisor (default is 30)
    maniacMinSize: 50,      // MANIAC post-pruning threshold; (default is 50)
    chanceCutoff: 2,        // Minimum chance, 0-4096 (default is 2)
    chanceAlpha: 19,        // Chance decay factor (default is 19)
    adaptive: false,        // true will apply an adaptive lossy encoding, 2nd input image is saliency map (default is false)
    guess: 'heuristically', // Pixel predictor for each plane (Y, Co, Cg, Alpha, Lookback)
                            // 'average', 'median gradient', 'median number', 'mixed', defualt is 'heuristically'
    alphaGuess: 'heuristically', // predictor for invisible pixels (only if keepAlpha is false)
    chromaSubsample: false  // true to write an incomplete 4:2:0 chroma subsampled lossy FLIF file (default is false)
};

// By default encode is asynchronous, and can accept an optional callback.
// If you set the async param to false and pass in a callback it will be ignored.
nodeFLIF.encode(endcodeParams, function (data) {
    console.log('Endcode finished.');
    if (data) {
        console.log(data);
    }
});
```

A note on `keepPalette`; by default, we read PNG images as 24-bit RGB or 32-bit RGBA. node-flif will automatically use a palette if the number of colors turns out to be low (doesn't matter if the original PNG is PNG8 or PNG24/32). The order the colors are stored in the FLIF palette is not related to the PNG8 palette order. By default it sorts on luma, the first component of YCoCg. The option `keepPalette: true` makes it read/write PNG8, and preserve the palette order. The FLIF format itself supports any palette order (though sorted on luma is slightly more compact to encode), and it supports more than 256 colors too. The main advantage of `keepPalette: true` is that you get full control over the palette order, and also a better memory footprint (because everything stays at 8-bit per pixel, no intermediate representation as 24-bit / 32-bit RGBA).

TODO: Test `adaptive` to see if it takes 3 image paths or just 2. If 3 accept filepath or false?  
TODO: Test `guess` to see if it can have multiple choices passed in for each plane, if so use object.

* * *

### Decode :star:

Convert your image **from** a FLIF.

```js
var nodeFLIF = require('node-flif');

var decodeParams = {
    // Required decoding parameters
    input: '/path/to/input-file.flif',  // Must end in .flif
    output: '/path/to/output-file.png', // Must end in one of these: .png, .pnm, .ppm, .pgm, .pbm, .pam
    // Common optional decoding parameters
    async: true,            // Set to false to run this as a synchronous decoding
    overwrite: false,       // Set to true to overwrite existing files on output (default is false)
    decodeQuality: 100,     // 0-100 Lossy decode quality (default is 100)
    keepMetaData: true,     // Set to false to strip EXIF/XMP metadata (default is true)
    keepColorProfile: true, // Set to false to strip ICC color profile (default is true)
    // Advanced optional decoding parameters
    crc: true,              // Set to false to skip verifying/adding CRC (default is true)
    keepPalette: false,     // Set to true to keep the existing PNG pallete. (default is false)
    scale: 1,               // Lossy downscaled image at scale 1:N (2,4,8,16,32) (default 1)
    resize: {               // Lossy downscaled image to fit inside given Width/Height (default uses input dimensions)
        width: 200,
        height: 400
    },
    fit: {                  // Lossy downscaled image to exactly the given Width/Height (default uses input dimensions)
        width: 200,
        height: 400
    }
};

// By default encode is asynchronous, and can accept an optional callback.
// If you set the async param to false and pass in a callback it will be ignored.
nodeFLIF.decode(decodeParams, function (data) {
    console.log('Decode finished.');
    if (data) {
        console.log(data);
    }
});
```

* * *

### Transcode :white_large_square:

Create a new FLIF from an existing FLIF with new settings.

Accepts all the same parameters as Encode and Decode (combined).

```js
var nodeFLIF = require('node-flif');

var transcodeParams = {
    // Required transcoding parameters
    input: '/path/to/input-file.flif',   // Must end in .flif
    output: '/path/to/output-file.flif', // Must end in .flif
    // All encoding and decoding parameters are accepted
};

// By default encode is asynchronous, and can accept an optional callback.
// If you set the async param to false and pass in a callback it will be ignored.
nodeFLIF.transcode(transcodeParams, function (data) {
    console.log('Transcode finished.');
    if (data) {
        console.log(data);
    }
});
```

* * *

### Identify :star:

Identify is a **synchronous** command that will return an `object` containing the name, dimensions, color, size, and interlace data about the image.

```js
var nodeFLIF = require('node-flif');

var pizzaData = nodeFLIF.identify('./images/pizza.flif');

console.log(pizzaData);
```

The above snippet will console log out an object similar to this:

```js
{
    file: 'images/pizza.flif',
    dimensions: '768x512',
    color: '8-bit RGB',
    interlace: 'interlaced',
    size: 475578
}
```

* * *

### Executable Path :star:

Returns a string of the internal path to the flif executable specific to your OS (win32/linux/darwin) and architecture (x86/x64).

**Design rationale:** It is assumed that there will be some people who just want a copy of the built executable for their system to use a CLI instead of using the Node wrapper.

```js
var path = require('path');
var nodeFLIF = require('node-flif');

// 'executables\\win32\\flif.exe'
var internalFlifPath = nodeFLIF.executablePath;

// 'C:\\projects\\your-site\\node_modules\\node-flif\\executables\\win32\\flif.exe'
var flifFullPath = path.join(process.cwd(), 'node_modules', 'node-flif', nodeFLIF.executablePath);
```

* * *

### Breakpoints :star:

Gives you information about the breakpoints in an image to allow for truncating the file at different points. The breakpoints, or "truncation offsets", are for truncations at scales 1:8, 1:4, 1:2. This function runs **synchronously**. Non-interlaced flifs will return an empty object.

```js
var nodeFLIF = require('node-flif');

var pizzaBreakpoints = nodeFLIF.breakpoints('./images/pizza.flif');

console.log(pizzaBreakpoints);
```

The above snippet will console log out an object similar to this:

```js
{
    offsetStart: 11,
    eighth: 8080,
    fourth: 24900,
    half: 90422
}
```

For non-interlaced flifs, you will get an empty object back. You can also detect if an image is interlaced or not by using `nodeFLIF.identify`.

```js
{}
```

* * *

### Version :star:

Returns the version of node-flif and the FLIF executable as an object.

```js
var nodeFLIF = require('node-flif');

var nodeFLIFVersions = nodeFLIF.versions; // { nodeFLIF: '0.2.0', flif: '0.3.0' }
var nodeFLIFVersion = nodeFLIF.version.nodeFLIF; // '0.2.0'
var flifVersion = nodeFLIF.version.flif // '0.3.0'
```

Here is a table of each version of Node-FLIF and the corresponding version of FLIF that shipped with it.

node-flif | flif  | flif-wasm
:--       | :--   | :--
0.2.0     | 0.3.0 | 1.0.3
0.1.0     | 0.3.0 | N/A


* * *

### Questions:

I need to try to solve these on my own with the CLI, then consult documentation or Jon with any remaining questions.

* Q: What are the upper/lower bounds for `-chance-alpha` (`-Z`, `chanceAlpha`), all I know is it allows for the number 19

