/* eslint-disable no-console */

/*
 flif -e [encode options] <input image(s)> <output.flif>

 General Options:
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
*/

/**
 * Encodes your PNG/PNM/PPM/PGM/PBM/PAM to a flif.
 * @param  {object}  params Parameters for the encoding passed in by the user.
 * @return {boolean}        True if successful, false if there was a problem.
 */
function encode (params) {
    var verifyParams = require('../helpers/verifyparams.js');
    verifyParams(params, 'encode');
    console.log(params);
}

module.exports = encode;
