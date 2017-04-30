# node-flif

A Node wrapper for the FLIF executable.

FLIF is a lossless image format designed with the web in mind. It has lots of great features. To learn more about the format go to [FLIF.info](http://flif.info).

Eventually you will be able to `npm install` this module.


## TO-DO List

1. Do builds for each version of FLIF.exe (Win/Lin/OSX).
1. Create a simple wrapper that allows passing in a parameter object that will abstract out the native executable switches.
1. Create API documentation
1. Add it to the NPM registry once functional.

* * *

## Supported Environments

* Node v4.0.0+ (Tested in v0.10.32 and it wouldn't work)
* Windows 32-Bit and 64-Bit
* Ubuntu/Debian 32-Bit and 64-Bit
* OSX 64-Bit ([Need maintainer for 32-bit support](https://github.com/FLIF-hub/node-flif/issues/3))

* * *

## Planned API

This is still being fleshed out.

* * *

### Encode:

Convert your image **to** a FLIF.

```js
var nodeFLIF = require('node-flif');

var encodeParams = {
    input: '/path/to/input-file.png', // Only accepts PNG, PNM, PPM, PGM, PBM, PAM
    output: '/where/to/store/output-file.flif',
    overwrite: false,       // Set to true to overwrite existing files on output (default is false)
    effort: 60,             // 0 = fast/poor compression, 100 = slowest/best? (default is 60)
    interlace: 'auto',      // true, false, or 'auto' (interlacing except on tiny images) (default is 'auto')
    quality: 100,           // 0-100, where 99 and below are lossy (default is 100)
    keepAlpha: false,       // Stores the original RGB data with 0 alpha (transparent) (default is false)
    crc: true,              // Set to false to skip verifying/adding CRC (default is true)
    keepMetaData: true,     // Set to false to strip EXIF/XMP metadata (default is true)
    keepColorProfile: true, // Set to false to strip ICC color profile (default is true)
    keepPalette: false,     // Set to true to keep the existing PNG pallete. (default is false)
    frameDelay: 100,        // Pass in a single number or an array of numbers for animations. (default is 100)
};

nodeFLIF.encode(encodeParams);
```

A note on `keepPalette`; by default, we read PNG images as 24-bit RGB or 32-bit RGBA. node-flif will automatically use a palette if the number of colors turns out to be low (doesn't matter if the original PNG is PNG8 or PNG24/32). The order the colors are stored in the FLIF palette is not related to the PNG8 palette order. By default it sorts on luma, the first component of YCoCg. The option `keepPalette: true` makes it read/write PNG8, and preserve the palette order. The FLIF format itself supports any palette order (though sorted on luma is slightly more compact to encode), and it supports more than 256 colors too. The main advantage of `keepPalette: true` is that you get full control over the palette order, and also a better memory footprint (because everything stays at 8-bit per pixel, no intermediate representation as 24-bit / 32-bit RGBA).

* * *

### Decode

Convert your image **from** a FLIF.

```js
var nodeFLIF = require('node-flif');

var decodeParams = {
    input: '/path/to/input-file.flif',
    output: '/path/to/output-file.png', // Must end in one of these: .png, .pnm, .ppm, .pgm, .pbm, .pam
    quality: 100,           // 0-100 Lossy decode quality (default is 100)
    scale: 1,               // Lossy downscaled image at scale 1:N (2,4,8,16,32) (default 1)
    resize: '200x400',      // Lossy downscaled image to fit inside WxH (default uses input dimensions)
    fit: '200x400'          // Lossy downscaled image to exactly WxH (default uses input dimensions)
};

nodeFLIF.decode(decodeParams);
```

* * *

### Identify

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

### Breakpoints

Gives you information about the breakpoints in an image to allow for truncated the file at different points. The breakpoints, or "truncation offsets", are for truncations at scales 1:8, 1:4, 1:2.

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
