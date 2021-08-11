// Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
//notThisFunctionName(danishWords); // returns 'ø'

  function findShortestWord(danishWords) {    
    var shortest = danishWords.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, danishWords[0]);
    return shortest;
  }

  console.log(danishWords);
  console.log(findShortestWord(danishWords));