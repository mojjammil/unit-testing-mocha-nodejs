var textManipulator = {};

// Function for checking data type
textManipulator.checkDataType = function (argument) {
    if (argument == null) {
        return 'null';
    }

    if (argument === undefined) {
        throw new Error('need an argument');
    }

    return typeof argument;

}

// Function for checking word length and returning longest word in array
textManipulator.longestWord = function (text) {
    var textInArray = text.split(' ');
    var longest = textInArray[0];
    for (let i = 0; i < textInArray.length; i++) {
        if (textInArray[i].length > longest.length) {
            longest = textInArray[i];
        }
    }
    return longest;
}

// Function for counting vowels in given string
textManipulator.countVowels = function (word) {
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < word.length ; x++)
  {
    if (vowel_list.indexOf(word[x]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
}

module.exports = textManipulator;