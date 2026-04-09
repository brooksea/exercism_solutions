//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const uniqueLetters = new Set()
  const lcSentence = str.toLowerCase()

  for (let i = 0; i < str.length; i++) {
    const char = lcSentence[i]
    const charCode = lcSentence.charCodeAt(i)
    if (charCode >= 97 && charCode <= 122) {
      uniqueLetters.add(char)
    }

    if (uniqueLetters.size === 26) return true
  }

  return false
};
