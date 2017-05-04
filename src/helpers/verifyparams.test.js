/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'verifyParams';
    var subject = require('./' + testName.toLowerCase() + '.js');

    var testData = [
        // Test if params exist
        { 'expect': false, 'src': 'encode',    'param': undefined                             },
        { 'expect': false, 'src': 'encode',    'param': null                                  },
        { 'expect': false, 'src': 'encode',    'param': true                                  },
        { 'expect': false, 'src': 'encode',    'param': false                                 },
        { 'expect': false, 'src': 'encode',    'param': 8                                     },
        { 'expect': false, 'src': 'encode',    'param': ''                                    },
        { 'expect': false, 'src': 'encode',    'param': []                                    },
        { 'expect': false, 'src': 'encode',    'param': {}                                    },

        // Test if src exists
        { 'expect': false, 'src': undefined,   'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': null,        'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': true,        'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': false,       'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': 8,           'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': '',          'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': [],          'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': {},          'param': { input: 'a.png',  output: 'a.flif' } },

        // Test if input/output exists
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png'                    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.png'                    } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.png'                    } },
        { 'expect': false, 'src': 'encode',    'param': {                  output: 'a.flif' } },
        { 'expect': false, 'src': 'decode',    'param': {                  output: 'a.flif' } },
        { 'expect': false, 'src': 'transcode', 'param': {                  output: 'a.flif' } },

        // Test if input/output are strings
        { 'expect': false, 'src': 'encode',    'param': { input: undefined, output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: undefined, output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: undefined, output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: null,      output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: null,      output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: null,      output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: true,      output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: true,      output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: true,      output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: false,     output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: false,     output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: false,     output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 8,         output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 8,         output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 8,         output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: ['a.png'], output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: ['a.flf'], output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: ['a.flf'], output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: {a: 'b'},  output: 'a.flif'  } },
        { 'expect': false, 'src': 'decode',    'param': { input: {a: 'b'},  output: 'a.png'   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: {a: 'b'},  output: 'a.flif'  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: undefined } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: undefined } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: undefined } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: true      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: true      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: true      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: false     } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: false     } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: false     } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: 8         } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: ['a.png'] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: ['a.flf'] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: ['a.flf'] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',   output: {a: 'b'}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif',  output: {a: 'b'}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif',  output: {a: 'b'}  } },

        // Test known good input/output filetypes for encode
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pnm',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.ppm',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pgm',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pbm',  output: 'a.flif' } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.pam',  output: 'a.flif' } },

        // Test known bads for input/ouput filetypes for encode
        { 'expect': false, 'src': 'encode',    'param': { input: 'potato', output: 'starch' } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.flif', output: 'a.flif' } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.png'  } },

        // Test known good input/output filetypes for decode
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.pnm'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.ppm'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.pgm'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.pbm'  } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.pam'  } },

        // Test known bads for input/ouput filetypes for decode
        { 'expect': false, 'src': 'decode',    'param': { input: 'taco',   output: 'rocket' } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.flif' } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.png',  output: 'a.png'  } },

        // Test known good input/output filetypes for transcode
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'b.flif' } },

        // Test known bads for input/ouput filetypes for transcode
        { 'expect': false, 'src': 'transcode', 'param': { input: 'turtle', output: 'robot'  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.png',  output: 'a.flif' } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.png'  } },

        // Test known good for overwrite
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: true      } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: true      } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: true      } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: false     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: false     } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: false     } },

        // Test known bad for overwrite
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: 'a'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: 'a'       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: 'a'       } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: [0, 1, 2] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: [0, 1, 2] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: [0, 1, 2] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: {'a': 1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: {'a': 1}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: {'a': 1}  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', overwrite: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  overwrite: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', overwrite: 8         } },

        // Test known good for quality
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 0           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 0           } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 0           } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 1           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 1           } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 1           } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 50          } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 50          } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 50          } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 100         } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 100         } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 100         } },

        // Test random number from 0-100 on quality
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: Math.round(Math.random() * 100) } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: Math.round(Math.random() * 100) } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: Math.round(Math.random() * 100) } },

        // Test known bad for quality
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 101         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 101         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 101         } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: -10         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: -10         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: -10         } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 22.2        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 22.2        } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 22.2        } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: 'a'         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: 'a'         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: 'a'         } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: [0, 1, 2]   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: [0, 1, 2]   } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: [0, 1, 2]   } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: {'a': 1}    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: {'a': 1}    } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: {'a': 1}    } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: null        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: null        } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: null        } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: true        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: true        } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: true        } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', quality: false       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  quality: false       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', quality: false       } },

        // Test known good for keepMetaData
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepMetaData: true      } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepMetaData: true      } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepMetaData: true      } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepMetaData: false     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepMetaData: false     } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepMetaData: false     } },

        // Test known bad for keepMetaData
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepMetaData: 'a'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepMetaData: 'a'       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepMetaData: 'a'       } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepMetaData: [0, 1, 2] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepMetaData: [0, 1, 2] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepMetaData: [0, 1, 2] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepMetaData: {'a': 1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepMetaData: {'a': 1}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepMetaData: {'a': 1}  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepMetaData: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepMetaData: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepMetaData: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepMetaData: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepMetaData: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepMetaData: 8         } },

        // Test known good for crc
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', crc: true      } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  crc: true      } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', crc: true      } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', crc: false     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  crc: false     } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', crc: false     } },

        // Test known bad for crc
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', crc: 'a'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  crc: 'a'       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', crc: 'a'       } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', crc: [0, 1, 2] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  crc: [0, 1, 2] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', crc: [0, 1, 2] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', crc: {'a': 1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  crc: {'a': 1}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', crc: {'a': 1}  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', crc: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  crc: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', crc: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', crc: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  crc: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', crc: 8         } },

        // Test known good for keepPalette
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: true      } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: true      } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: true      } },
        { 'expect': true,  'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: false     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: false     } },
        { 'expect': true,  'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: false     } },

        // Test known bad for keepPalette
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: 'a'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: 'a'       } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: 'a'       } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: [0, 1, 2] } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: [0, 1, 2] } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: [0, 1, 2] } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: {'a': 1}  } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: {'a': 1}  } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: {'a': 1}  } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: null      } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: null      } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: null      } },
        { 'expect': false, 'src': 'encode',    'param': { input: 'a.png',  output: 'a.flif', keepPalette: 8         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  keepPalette: 8         } },
        { 'expect': false, 'src': 'transcode', 'param': { input: 'a.flif', output: 'a.flif', keepPalette: 8         } },

        // Test known good for scale
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 1           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 2           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 4           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 8           } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 16          } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 32          } },

        // Test known bad for scale
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 3           } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 22          } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: -10         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 22.2        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: 'a'         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: [0, 1, 2]   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: {'a': 1}    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: null        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: true        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  scale: false       } },


        // Test known good for resize
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: '1x1'       } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: '10x20'     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: '320x240'   } },

        // Test known bad for resize
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 3           } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 22          } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: -10         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 22.2        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 'a'         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: [0, 1, 2]   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: {'a': 1}    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: null        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: true        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: false       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: '100'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: 'x10'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  resize: '10x'       } },

        // Test known good for fit
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: '1x1'       } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: '10x20'     } },
        { 'expect': true,  'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: '320x240'   } },

        // Test known bad for fit
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: 3           } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: 22          } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: -10         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: 22.2        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: 'a'         } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: [0, 1, 2]   } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: {'a': 1}    } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: null        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: true        } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: false       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: '100'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: 'x10'       } },
        { 'expect': false, 'src': 'decode',    'param': { input: 'a.flif', output: 'a.png',  fit: '10x'       } }
    ];

    for (var i = 0; i < testData.length; i++) {
        var param = testData[i].param;
        var src = testData[i].src;
        var actual = subject(param, src, true);
        var expectation = testData[i].expect;

        if (actual !== expectation) {
            var errMsg = '\n' +
                'TEST: verifyParams\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  Source: ' + src + '\n' +
                '  Params: ' + JSON.stringify(param, null, 4).replace('}', '  }') + '\n' +
                '  Expected: ' + expectation + '\n' +
                '  Actual: ' + actual;
            throw errMsg;
        }
    }

    return [testName, testData.length];
}

module.exports = test;
