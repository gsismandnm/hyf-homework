// Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
//notThisFunctionName(danishWords); // returns 'ø'

  function findShortestWord(danishWords) {    
    const shortest = danishWords.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    },);
    return shortest;
  }

  console.log('All Words are : ' + danishWords);
  console.log('Short word is :  ' + findShortestWord(danishWords));