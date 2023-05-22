function fun(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = [];
  
    for (let word of words) {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    const newSentence = capitalizedWords.join(' ');
    return newSentence;
  }


