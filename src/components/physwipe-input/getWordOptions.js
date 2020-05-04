const dictionary = require('./dictionary');
const qwertyAdj = require('./qwertyAdj');
const dl = require('damerau-levenshtein');

const getWordOptions = input => {
  let options = [];

  for (let word in dictionary) {
    const path = dictionary[word];
    if (checkFirstAndLastQwertyAdj(input, path)) {
      let similarity = dl(input, path).similarity;
      let boost = 0;
      if (path[0] === input[0]) {
        boost += .05;
      }
      if (path[path.length] === input[input.length]) {
        boost += .05;
      }

      similarity += boost;
      options.push({word, similarity});
    }
  }
  options.sort((a, b) => b.similarity - a.similarity);
  let wordOptions = options.slice(0, 4).map(option => option.word);
  return wordOptions;
}

const checkFirstAndLastQwertyAdj = (s1, s2) => {
  const isFirstAdj = checkLettersQwertyAdjacent(s1[0], s2[0]);
  const isLastAdj = checkLettersQwertyAdjacent(s1[s1.length - 1], s2[s2.length - 1]);
  return isFirstAdj && isLastAdj;
}

const checkLettersQwertyAdjacent = (l1, l2) => l1 === l2 || qwertyAdj[l1].indexOf(l2) !== -1;
export default getWordOptions;
