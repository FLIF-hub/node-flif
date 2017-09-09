/**
 * Check if a phrase ends in a specific word
 * @param  {string}  phrase The string you are checking.
 * @param  {string}  word   The string you are matching against
 * @return {boolean}        True if phrase ends in word
 */
function endsWith (phrase, word) {
    if (!phrase || !word || typeof(phrase) !== 'string' || typeof(word) !== 'string') {
        throw 'The endsWith method requires two strings.';
    }
    return phrase.slice(-word.length) == word;
}

module.exports = endsWith;
