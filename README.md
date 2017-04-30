# node-flif

A Node wrapper for the FLIF executable.

Eventually you will be able to `npm install` this module.

## TO-DO List

1. Do builds for each version of FLIF.exe (Win/Lin/OSX).
1. Create a simple wrapper that allows passing in a parameter object that will abstract out the native executable switches.
1. Create API documentation
1. Add it to the NPM registry once functional.

## Planned API

This is still being fleshed out.

* * *

### Encode:

Convert your image **to** a FLIF.

```js
var nodeFLIF = require('nodeFLIF');

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
var nodeFLIF = require('nodeFLIF');

var decodeParams = {
    input: '/path/to/input-file.flif',
    output: '/path/to/output-file.png', // Must end in one of these: .png, .pnm, .ppm, .pgm, .pbm, .pam
   -i, --identify             do not decode, just identify the input FLIF file
   -q, --quality=N            lossy decode quality percentage; default -q100
   -s, --scale=N              lossy downscaled image at scale 1:N (2,4,8,16,32); default -s1
   -r, --resize=WxH           lossy downscaled image to fit inside WxH (but typically smaller)
   -f, --fit=WxH              lossy downscaled image to exactly WxH
   -b, --breakpoints          report breakpoints (truncation offsets) for truncations at scales 1:8, 1:4, 1:2
};

nodeFLIF.decode(decodeParams);
```

* * *

### Identify

Identify is a **synchronous** command that will return an `object` containing the name, dimensions, color, size, and interlace data about the image.

```js
var nodeFLIF = require('nodeFLIF');

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
