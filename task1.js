function replaceString(string, valueToReplace, valueToReplaceWith) {
    let newString = '';
    let currentIndex = 0;
    let matchIndex;
  
    while ((matchIndex = string.indexOf(valueToReplace, currentIndex)) !== -1) {
      newString += string.substring(currentIndex, matchIndex);
      newString += valueToReplaceWith;
      currentIndex = matchIndex + valueToReplace.length;
    }
  
    newString += string.substring(currentIndex);
    return newString;
  }

