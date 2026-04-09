//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const lastNum = number.toString().slice(-1)
  const secondToLastNum = number/10 >= 1 ? number.toString().slice(-2, -1) : ''

  let suffix = 'th'

  if (secondToLastNum != 1 || secondToLastNum === '') {
    if (lastNum == 1) {
      suffix = 'st'
    }
    
    if (lastNum == 2) {
      suffix = 'nd'
    }
    
    if (lastNum == 3) {
      suffix = 'rd'
    }
  }

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`
};
