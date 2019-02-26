var assert = require('assert').strict;
var textManipulator = require('../app.js');

// Test function for checking data type
describe('checkDataType', function () {
        it('Should return a number when given a number as argument', function () {
            assert.equal('number', textManipulator.checkDataType(42));
        });

        it('Should return null when given null as argument', function () {
            assert.equal('null', textManipulator.checkDataType(null));
        });
});

// Test function for checking longest word output
describe('longestWord', function () {

        it('Should return "jumped" when given following text', function () {
            assert.equal('jumped', textManipulator.longestWord('The quick brown fox jumped over the lazy dog'));
        });

        it('Should return a really long word', function () {
            assert.equal('othorhinomolaolaol', textManipulator.longestWord('what if say we try a super long word such othorhinomolaolaol'))
        });

        it('Should return the longest number if given numbers are parameters', function () {
            assert.equal('23232323', textManipulator.longestWord('30 2000 75 23232323'));
        });
});

// Test function for vowel count
describe('countVowels', function () {
        it('Should count the number of vowels', function () {
            assert.equal(4, textManipulator.countVowels('Big Umbrella'));
        });
});