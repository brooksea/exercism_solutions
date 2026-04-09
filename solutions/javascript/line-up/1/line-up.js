//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let lastNum = number.toString().slice(-1)
  let secondToLastNum = number/10 >= 1 ? number.toString().slice(-2, -1) : ''

  if (secondToLastNum != 1 || secondToLastNum === '') {
    if (lastNum == 1) {
      return `${name}, you are the ${number}st customer we serve today. Thank you!`
    }
    
    if (lastNum == 2) {
      return `${name}, you are the ${number}nd customer we serve today. Thank you!`
    }
    
    if (lastNum == 3) {
      return `${name}, you are the ${number}rd customer we serve today. Thank you!`
    }
  }

  return `${name}, you are the ${number}th customer we serve today. Thank you!`
};
