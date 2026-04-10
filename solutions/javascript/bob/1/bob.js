//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const lastChar = message.trim().slice(-1)

  if (/[A-Za-z]/g.test(message) && message.replace(/[^a-zA-Z]+/g, '').split('').every(char => char >= 'A' && char <= 'Z')) {
    if (lastChar === '?') {
      return "Calm down, I know what I'm doing!"
    }
    return "Whoa, chill out!"
  }

  if (lastChar === '?') {
    return "Sure."
  }
  
  if (message === undefined || message.trim() === '') {
    return "Fine. Be that way!"
  }
  
  return "Whatever."
};
