// find and count the danish letters

const danishString = "Jeg har en blå bil";
//notThisFunctionName(danishString); // returns {total: 1, å: 1}
const danishString2 = "Blå grød med røde bær";
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function countDanishLetters(str) {
    const arrStr = str.toLowerCase().split('') //first change them to lowercase and split 
    const danishCharacters = [] //second find all danish characters in the string
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i]==='ø' || arrStr[i]==='å' || arrStr[i]==='æ') {
            danishCharacters.push(arrStr[i])
        }
    }

    let result = {total: danishCharacters.length}
    danishCharacters.forEach(item => {
        if(result[item]) {
            result[item] +=1
            return
        }
        result[item] = 1;
    })
    return result
}

console.log(countDanishLetters(danishString));
console.log(countDanishLetters(danishString2));
