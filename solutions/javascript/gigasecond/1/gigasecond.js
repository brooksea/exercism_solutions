//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const GIGASECOND = 1000000000
const GIGA_MS = GIGASECOND * 1000

export const gigasecond = date => new Date(date.getTime() + GIGA_MS)

