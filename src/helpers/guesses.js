var guesses = {
    allHeuristically: {
        y: 'heuristically',
        co: 'heuristically',
        cg: 'heuristically',
        alpha: 'heuristically',
        lookback: 'heuristically'
    },
    allAverage: {
        y: 'average',
        co: 'average',
        cg: 'average',
        alpha: 'average',
        lookback: 'average'
    },
    allMedianGradient: {
        y: 'median gradient',
        co: 'median gradient',
        cg: 'median gradient',
        alpha: 'median gradient',
        lookback: 'median gradient'
    },
    allMedianNumber: {
        y: 'median number',
        co: 'median number',
        cg: 'median number',
        alpha: 'median number',
        lookback: 'median number'
    },
    allMixed: {
        y: 'mixed',
        co: 'mixed',
        cg: 'mixed',
        alpha: 'mixed',
        lookback: 'mixed'
    },
    rainbow1: {
        y: 'heuristically',
        co: 'average',
        cg: 'median gradient',
        alpha: 'median number',
        lookback: 'mixed'
    },
    rainbow2: {
        y: 'average',
        co: 'median gradient',
        cg: 'median number',
        alpha: 'mixed',
        lookback: 'heuristically'
    },
    rainbow3: {
        y: 'median gradient',
        co: 'median number',
        cg: 'mixed',
        alpha: 'heuristically',
        lookback: 'average'
    },
    rainbow4: {
        y: 'median number',
        co: 'mixed',
        cg: 'heuristically',
        alpha: 'average',
        lookback: 'median gradient'
    },
    rainbow5: {
        y: 'mixed',
        co: 'heuristically',
        cg: 'average',
        alpha: 'median gradient',
        lookback: 'median number'
    },
    missingY: {
        co: 'heuristically',
        cg: 'heuristically',
        alpha: 'heuristically',
        lookback: 'heuristically'
    },
    missingCo: {
        y: 'heuristically',
        cg: 'heuristically',
        alpha: 'heuristically',
        lookback: 'heuristically'
    },
    missingCg: {
        y: 'heuristically',
        co: 'heuristically',
        alpha: 'heuristically',
        lookback: 'heuristically'
    },
    missingAlpha: {
        y: 'heuristically',
        co: 'heuristically',
        cg: 'heuristically',
        lookback: 'heuristically'
    },
    missingLookback: {
        y: 'heuristically',
        co: 'heuristically',
        cg: 'heuristically',
        alpha: 'heuristically'
    },
    allTrue: {
        y: true,
        co: true,
        cg: true,
        alpha: true,
        lookback: true
    },
    allFalse: {
        y: false,
        co: false,
        cg: false,
        alpha: false,
        lookback: false
    },
    allNumber: {
        y: 5,
        co: 5,
        cg: 5,
        alpha: 5,
        lookback: 5
    },
    allString: {
        y: 'a',
        co: 'a',
        cg: 'a',
        alpha: 'a',
        lookback: 'a'
    },
    allArray: {
        y: ['a'],
        co: ['a'],
        cg: ['a'],
        alpha: ['a'],
        lookback: ['a']
    },
    allObject: {
        y: { a: 'b' },
        co: { a: 'b' },
        cg: { a: 'b' },
        alpha: { a: 'b' },
        lookback: { a: 'b' }
    },
    empty: {}
};

module.exports = guesses;
